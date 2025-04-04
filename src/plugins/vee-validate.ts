import { configure, defineRule } from 'vee-validate'
import {
  confirmed,
  required,
  email,
  min,
  alpha_num,
  length,
} from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'

configure({
  generateMessage: localize({
    ru: {
      messages: {
        numeric: 'Значение поля должно быть числом',
        required: 'Поле обязательно для заполнения',
        email: 'Поле должно быть email',
        min: 'Поле должно быть не короче 0:{min} символов',
        length: 'Необходимо ввести 0:{length} символов',
        confirmed: 'Пароли не совпадают',
        alpha_num:
          'Пароль должен содержать буквы A-z разного регистра и цифры 0-9',
        verify_password:
          'Пароль должен содержать заглавную букву, цифру и символ(~!@#$%^&*)',
      },
    },
  }),
})

setLocale('ru')

const numeric = (value: number | string) => {
  if (typeof value === 'number') {
    return value >= 0 ? true : false
  } else {
    const number = Number(value.replace(',', '.'))
    return !!number
  }
}

const verify_password = (value: string) => {
  const strongRegex = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~!@#$%^&*])(?=.{8,})',
  )
  return strongRegex.test(value)
}

defineRule('required', required)
defineRule('confirmed', confirmed)
defineRule('alpha_num', alpha_num)
defineRule('email', email)
defineRule('min', min)
defineRule('numeric', numeric)
defineRule('verify_password', verify_password)
defineRule('length', length)
