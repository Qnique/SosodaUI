import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePayloadStore } from '../stores/payloadStore';

export function useInactivityTimer(timeout =  1800000) {
  let timer
  const router = useRouter()
  const userStore = usePayloadStore()

  const resetTimer = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      userStore.clearPayload() // Clear Pinia store
      sessionStorage.clear()
      router.push({ name: 'Login' }); // Redirect to login
    }, timeout)
  }

  const activityEvents = ['mousemove', 'keydown', 'click', 'scroll']

  onMounted(() => {
    activityEvents.forEach(event =>
      window.addEventListener(event, resetTimer)
    )
    resetTimer()
  })

  onUnmounted(() => {
    activityEvents.forEach(event =>
      window.removeEventListener(event, resetTimer)
    )
    clearTimeout(timer)
  })
}
