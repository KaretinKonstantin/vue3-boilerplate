import { AxiosResponse } from 'axios'
import { http } from './http'
import { Meta } from '@/types/types'

type ResponseData<T> = T extends any[]
  ? {
      meta: Meta
      data: T
      links: {
        [key: string]: string
      }
    }
  : T extends number
    ? { [key: string]: number }
    : T

const getEntity = async <T>(
  url: string,
  params?: any,
): Promise<AxiosResponse<ResponseData<T>, any>> => {
  const response = await http.get<T>(url, params)

  return response as AxiosResponse<ResponseData<T>, any>
}

const createEntity = async <T>(
  url: string,
  data?: T,
  params?: any,
): Promise<AxiosResponse<T, any>> => {
  const response = await http.post<T>(url, data, params)

  return response
}

const deleteEntity = async (url: string, params?: any) => {
  const response = await http.delete(url, params)

  return response
}

const updateEntity = async <T>(
  url: string,
  data?: T,
  params?: any,
): Promise<AxiosResponse<T, any>> => {
  const response = await http.put<T>(url, data, params)

  return response
}

const patchEntity = async <T>(
  url: string,
  data?: T,
  params?: any,
): Promise<AxiosResponse<T, any>> => {
  const response = await http.patch<T>(url, data, params)

  return response
}

export { getEntity, createEntity, deleteEntity, updateEntity, patchEntity }
