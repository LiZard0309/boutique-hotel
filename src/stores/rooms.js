import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useRoomsStore = defineStore('rooms', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const dateRange = computed(() => {})

  axios.get()

  return { count, doubleCount, increment }
})
