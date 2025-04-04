import applyCaseMiddleware from 'axios-case-converter'
import axios from 'axios'
import router from '@/routes'

export const http = applyCaseMiddleware(
  axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }),
  {
    preservedKeys: ['content'],
    ignoreHeaders: true,
  },
)

http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => Promise.reject(error),
)

http.interceptors.response.use(
  response => {
    return response
  },
  async error => {
    if (error.response.status === 401) {
      router.push({
        name: 'auth.sign-in',
      })
    }
    return Promise.reject(error)
  },
)
