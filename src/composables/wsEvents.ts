import { useAuthStore } from '@/stores/auth-store'
import { useNotificationsStore } from '@/stores/notifications/notifications-store'
import { storeToRefs } from 'pinia'

export const wsEvents = [
  {
    name: 'SomeAction',
    handler: (data: any) => {
      const notificationStore = useNotificationsStore()
      const authStore = useAuthStore()
      const { user } = storeToRefs(authStore)
      const { notificationTypes, activeTab } = storeToRefs(notificationStore)

      if (
        user.value?.role.value === 'counterparty' ||
        user.value?.role.value === 'listener'
      ) {
        if (
          notificationTypes.value[
            activeTab.value as keyof typeof notificationTypes.value
          ].includes(data.type)
        )
          notificationStore.addUnreadNotification(data)
      } else {
        notificationStore.addNotification(data)
      }
    },
  },
]
