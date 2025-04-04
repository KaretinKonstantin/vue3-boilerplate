// Utils
import { createEntity } from '@/utils/entities/requests'
import { CHUNK_SIZE } from '@/utils/constants'
import { v4 as uuid } from 'uuid'
// Types
import { FileAPI, FilePayload } from '@/types/types'

const uploadChunk = async (payload: FilePayload) => {
  const fileRequestBody: FormData = new FormData()
  fileRequestBody.set('uuid', payload.uuid)
  fileRequestBody.set('file', payload.file)
  fileRequestBody.set('filename', payload.name)
  fileRequestBody.set('chunks', String(payload.chunks))
  fileRequestBody.set('chunk', String(payload.chunk))
  fileRequestBody.set('type', payload.type)

  const { data } = await createEntity<any>(
    '/file/upload-chunk',
    fileRequestBody,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  )

  return data
}

const uploadFile = async (
  file: File,
  currentChunk = 0,
  fileUUID = '',
): Promise<FileAPI | null> => {
  let fileObject: FileAPI | null = null

  const id = fileUUID || uuid()
  const filename = file.name
  const chunkLowEdge = currentChunk * CHUNK_SIZE
  const chunkHighEdge = (currentChunk + 1) * CHUNK_SIZE
  const chunk = file.slice(chunkLowEdge, chunkHighEdge)
  const payload: FilePayload = {
    uuid: id,
    file: chunk,
    name: filename,
    size: file.size,
    chunks: Math.ceil(file.size / CHUNK_SIZE) + 1,
    chunk: currentChunk,
    type: file.type,
  }

  try {
    const data = await uploadChunk(payload)

    if (!data.file) {
      currentChunk++
      fileObject = await uploadFile(file, currentChunk, id)
    } else {
      return data.file as FileAPI
    }
  } catch (error) {
    throw new Error('Ошибка при загрузке файла')
  }

  return fileObject
}

export default uploadFile
