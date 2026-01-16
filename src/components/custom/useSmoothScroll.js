import {
  ref
} from 'vue'

export function useSmoothScroll() {
  const isScrolling = ref(false)

  const smoothScrollTo = (elementId, options = {}) => {
    const {
      duration = 1000, offset = 80
    } = options

    if (isScrolling.value) return

    const target = document.getElementById(elementId)
    if (!target) {
      console.error('Target not found:', elementId)
      return
    }

    isScrolling.value = true

    try {
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      })

      setTimeout(() => {
        isScrolling.value = false
      }, duration)

    } catch (error) {
      window.scrollTo(0, target.offsetTop - offset)
      isScrolling.value = false
    }
  }

  return {
    smoothScrollTo,
    isScrolling
  }
}