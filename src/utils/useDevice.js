import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useDevice() {
  const isMobile = ref(window.innerWidth <= 550)

  const checkDevice = () => {
    isMobile.value = window.innerWidth <= 550
  }

  onMounted(() => {
    checkDevice()
    window.addEventListener('resize', checkDevice)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkDevice)
  })

  return { isMobile }
}
