export interface BreadcrumbItem {
  label: string
  url: string
}

export interface FileAPI {
  createdAt: string
  extension: string
  filename: string
  id: string
  owner: any
  size: number
  type: 'file'
  url: string
}

export interface FilePayload {
  uuid: string
  file: Blob | File
  name: string
  size: number
  chunks: number
  chunk: number
  type: string
}
