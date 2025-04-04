import { TabViewChangeEvent } from 'primevue/tabview'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// @ts-expect-error так надо
export const useTab = TAB => {
  type TabType = keyof typeof TAB

  const route = useRoute()
  const router = useRouter()

  const activeTab = ref(0)

  onMounted(() => {
    activeTab.value = TAB[route.hash as TabType]
  })

  const handleChangeTab = (event: TabViewChangeEvent) => {
    router.replace({ hash: TAB[event.index] })
  }

  return { activeTab, handleChangeTab }
}
