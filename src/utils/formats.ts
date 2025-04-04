import { format, parseISO } from 'date-fns'

export const dateFormat = (date: string | null, pattern = 'dd.MM.yyyy') => {
  if (date) {
    return format(parseISO(date), pattern)
  } else {
    return ''
  }
}

export const dateFormatNew = (
  date: Date | string | null,
  pattern = 'dd.MM.yyyy',
) => {
  if (date) {
    return format(date, pattern)
  } else {
    return ''
  }
}

export const formatBytes = (bytes: number, decimals: number = 2) => {
  if (bytes == 0) return '0 Bytes'
  const k = 1024,
    dm = decimals,
    sizes = ['Байт', 'Кб', 'Мб', 'Гб', 'Тб', 'Пб', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

// Convert 19.09.2001 11:45:33 to Date object
export const convertDateStringToDate = (date: Date | string) => {
  if (typeof date !== 'string' || !date) return date

  const dateWithoutTime = date.split(' ')[0]
  const value = dateWithoutTime.split('.')
  const normalizedDate = new Date([value[1], value[0], value[2]].join('.'))

  return normalizedDate
}

export const convertDateStringToFormatDate = (
  date: Date | string,
  pattern?: string,
) => {
  const value =
    typeof date === 'string' ? (convertDateStringToDate(date) as Date) : date
  return dateFormat(value.toISOString(), pattern ?? 'dd.MM.yyyy')
}

// Convert 1234567890 to 1 234 567 890
export const formatNumberWithSpaces = (number: number) => {
  const stringedNumber = number.toString() + '*'
  const iterationCount = Math.ceil((stringedNumber.length - 1) / 3)
  const result = []

  for (let i = 1; i <= iterationCount; i++) {
    const startIndex = -3 * i - 1
    const endIndex = -3 * i + 2
    result.push(stringedNumber.slice(startIndex, endIndex))
  }

  return result.reverse().join(' ')
}
