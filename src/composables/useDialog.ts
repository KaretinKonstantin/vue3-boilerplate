import { useConfirm } from 'primevue/useconfirm'

export interface ConfirmOptions {
  message: string
  header: string
  rejectCallback: (...args: any) => any
  acceptCallback: (...args: any) => any
  rejectLabel?: string
  acceptLabel?: string
}

export const useDialog = () => {
  const confirmDialog = useConfirm()

  const confirmDelete = (options: ConfirmOptions) => {
    confirmDialog.require({
      header: options.header,
      message: options.message,
      rejectLabel: 'Отменить',
      acceptLabel: 'Удалить',
      acceptClass: 'p-button-danger',
      reject: options.rejectCallback,
      accept: options.acceptCallback,
    })
  }

  const confirmModal = (options: ConfirmOptions) => {
    return confirmDialog.require({
      header: options.header,
      message: options.message,
      rejectLabel: options.rejectLabel ?? 'Отменить',
      acceptLabel: options.acceptLabel ?? 'Ок',
      reject: options.rejectCallback,
      accept: options.acceptCallback,
    })
  }

  const confirmInsufficientSubscription = () => {
    return confirmDialog.require({
      header: 'Доступ ограничен',
      message:
        'Для данного действия необходимо оформить подписку с расширенным доступом',
      acceptLabel: 'Ок',
      rejectClass: 'no-display',
      accept: () => {},
    })
  }

  return {
    confirmDelete,
    confirmModal,
    confirmInsufficientSubscription,
  }
}
