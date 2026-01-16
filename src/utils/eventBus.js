import {
  ref
} from 'vue'

const events = ref({})

export const eventBus = {
  on(event, callback) {
    if (!events.value[event]) {
      events.value[event] = []
    }
    events.value[event].push(callback)
  },

  off(event, callback) {
    if (!events.value[event]) return
    const index = events.value[event].indexOf(callback)
    if (index > -1) {
      events.value[event].splice(index, 1)
    }
  },

  emit(event, data) {
    if (!events.value[event]) return
    events.value[event].forEach(callback => callback(data))
  }
}