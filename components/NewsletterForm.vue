<script setup>
const props = defineProps({ textColor: String, button: Object })

const showMessage = ref(false)

const submit = () => {
  showMessage.value = true
  setTimeout(() => {
    showMessage.value = false
  }, 4000)
}

const borderColor = computed(() => {
  return props.textColor === 'text-white' ? 'border-light' : 'border-dark'
})

const placeHolderColor = computed(() => {
  return props.textColor === 'text-white'
    ? 'placeholder-white'
    : 'placeholder-dark'
})
</script>

<template>
  <form action="" class="relative">
    <div class="flex flex-col space-y-6">
      <div
        class="flex items-center justify-center space-x-1 lg:justify-start"
        :class="textColor"
      >
        <h4 class="font-display text-xl">Sign up for our newsletter</h4>
      </div>
      <input
        type="email"
        placeholder="Your email"
        class="rounded-lg border bg-transparent px-6 py-4 transition-all focus:outline-none"
        :class="[textColor, borderColor, placeHolderColor]"
        required
      />
    </div>

    <div v-if="button" class="mt-8 flex justify-center lg:justify-start">
      <Button :button="button" @click.prevent="submit" />
    </div>

    <Transition name="fade">
      <div
        v-if="showMessage"
        class="botttom-0 absolute left-0 translate-y-full text-lg"
        :class="textColor"
      >
        Thank you!
      </div>
    </Transition>
  </form>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
