<script setup>
import Client from 'shopify-buy'
const config = useRuntimeConfig()
const props = defineProps({ blok: Object })

const productObject = {}
//const url = "https://store-fmqhavaj36.mybigcommerce.com";
const url = config.public.bigCommerceUrl
const token = config.public.bigCommerceToken
const baseOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }, // change for: localhostToken when locally
}

const productId = computed(() => props.blok?.product?.items[0]?.id)
console.log(productId)
const product = ref(null)
const pending = ref(true)

const fetchProduct = async (id) => {
  if (!id) return

  const options = {
    ...baseOptions,
    body: JSON.stringify({
      query: `{
        site {
          product(entityId: ${id}) {
            id
            entityId
            name
            plainTextDescription
            defaultImage {
              ...ImageFields
            }
            prices {
              price {
                ...MoneyFields
              }
            }
          }
        }
      }

      fragment ImageFields on Image {
        url320wide: url(width: 320)
        url640wide: url(width: 640)
        url960wide: url(width: 960)
        url1280wide: url(width: 1280)
      }

      fragment MoneyFields on Money {
        value
        currencyCode
      }`,
    }),
  }

  const response = await fetch(`${url}/graphql`, options)

  const {
    data: {
      site: { product },
    },
  } = await response.json()
  console.log(product)
  productObject.title = product.name
  productObject.image = product.defaultImage.url1280wide
  productObject.currency = product.prices.price.currencyCode
  productObject.price = `${product.prices.price.value}`
  productObject.avaiable = true

  pending.value = false
  return productObject
}

watchEffect(async () => {
  try {
    product.value = await fetchProduct(productId.value)
    pending.value = false
  } catch (error) {
    console.log(error)
    product.value = null
    pending.value = false
  }
})
</script>

<template>
  <section
    v-editable="blok"
    class="page-section single-product-section"
    :class="'bg-' + blok.background_color"
  >
    <div
      class="container grid items-center gap-6 sm:gap-10 md:gap-12 lg:grid-cols-2"
    >
      <div
        class="order-last"
        :class="blok.reverse_layout ? '' : 'lg:order-first'"
      >
        <Headline v-if="blok.headline" class="mb-4">
          BIGCOMMERCE: {{ blok.headline }}
        </Headline>

        <RichText :text="blok.text" />
        <div v-if="blok.button.length" class="mt-8">
          <Button
            v-for="button in blok.button"
            :key="button._uid"
            :button="button"
          />
        </div>
      </div>
      <div>
        <div
          v-if="!pending && product"
          class="overflow-hidden rounded-lg shadow-2xl"
        >
          <img
            :src="product.image"
            :alt="product.title"
            class="pointer-events-none block"
          />
          <div class="flex justify-between bg-light px-6 py-3 text-dark">
            <span>{{ product.title }}</span>
            <span v-if="product.avaiable" class="font-bold">
              {{ product.price + ' ' + product.currency }}
            </span>
            <span v-else class="font-bold">Currently out of stock</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
