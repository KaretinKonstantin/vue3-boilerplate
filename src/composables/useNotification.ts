import { AxiosError } from 'axios'
import { useToast } from 'primevue/usetoast'

export const useNotification = () => {
  const toast = useToast()

  const call = (
    severity: 'success' | 'info' | 'warn' | 'error' | undefined = 'info',
    summary: string = 'Успех!',
    detail: string = 'Успех',
  ) => {
    toast.add({
      severity,
      summary,
      detail,
      life: 3000,
    })
  }

  const inProgress = () => {
    toast.add({
      severity: 'info',
      summary: 'Функционал находится в работе',
      life: 3000,
    })
  }

  const info = (text: string) => {
    toast.add({
      severity: 'info',
      summary: 'Информация',
      detail: text,
      life: 3000,
    })
  }

  const success = (detail: string) => {
    toast.add({
      severity: 'success',
      summary: 'Успех',
      detail: detail,
      life: 3000,
    })
  }

  const error = (error: AxiosError<any, any> | string) => {
    let errorMessage = null

    if (typeof error === 'string') {
      errorMessage = error
    } else {
      errorMessage = error.response?.data?.message ?? error.message
    }

    toast.add({
      severity: 'error',
      summary: 'Возникла ошибка',
      detail: errorMessage,
      life: 3000,
    })
  }

  const validationMessage = () => error('Проверьте введенные данные')

  return {
    call,
    info,
    success,
    error,
    inProgress,
    validationMessage,
  }
}
