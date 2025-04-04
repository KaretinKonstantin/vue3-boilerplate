import { useSystemStore } from '@/stores/system-store'
import { storeToRefs } from 'pinia'

export const useData = (
  requests: (Promise<any> | undefined)[],
  needDataFromPreviousRequests?: (Promise<any> | undefined)[],
) => {
  const systemStore = useSystemStore()
  const { loading } = storeToRefs(systemStore)
  loading.value = true
  Promise.all(requests).finally(() => {
    if (needDataFromPreviousRequests && needDataFromPreviousRequests.length)
      loading.value = false
  })
  if (needDataFromPreviousRequests && needDataFromPreviousRequests.length) {
    Promise.all(needDataFromPreviousRequests).finally(() => {
      loading.value = false
    })
  }
}
