import fs from 'fs'
import * as crypto from 'crypto'

import {
  MultipartFileContract,
  FileValidationOptions,
} from '@ioc:Adonis/Core/BodyParser'
import Drive from '@ioc:Adonis/Core/Drive'
import AppException from 'App/Exceptions/AppException'

interface ImageUploadParams {
  image: MultipartFileContract
  resource: string
}

interface ImageUploadResponse {
  url: string
  fileName: string
  contentType: string
  size: number
}

interface ImageDeleteParams {
  fileName: string
  resource: string
}

/*
|--------------------------------------------------------------------------
| Constants
|--------------------------------------------------------------------------
*/

const imageValidator: FileValidationOptions = {
  extnames: ['jpg', 'png', 'jpeg'],
  size: '1mb',
}

/*
|--------------------------------------------------------------------------
| Functions
|--------------------------------------------------------------------------
*/

function imageFileNameGenerator(file: MultipartFileContract): string {
  const fileHash = crypto.randomBytes(10).toString('hex')
  const fileName = `${fileHash}-${file.clientName}`

  return fileName
}

async function imageUpload({
  image,
  resource,
}: ImageUploadParams): Promise<ImageUploadResponse> {
  let url = ''
  const fileName = imageFileNameGenerator(image)
  const stream = fs.createReadStream(image.tmpPath!)
  const endpoint = `${resource}/${fileName}`
  const contentType = image.headers['content-type']

  try {
    await Drive.putStream(endpoint, stream, {
      contentType,
      visibility: 'public-read',
    })

    const driveURL = await Drive.getUrl(endpoint)

    if (process.env.DRIVE_DISK === 'local') {
      url = `localhost:3333${driveURL}`
    } else {
      url = driveURL
    }
  } catch {
    throw new AppException('Erro desconhecido', 500)
  }

  return {
    url,
    fileName,
    contentType,
    size: image.size,
  }
}

async function imageDelete({
  fileName,
  resource,
}: ImageDeleteParams): Promise<void> {
  try {
    await Drive.delete(`${resource}/${fileName}`)
  } catch {
    throw new AppException('Erro desconhecido', 500)
  }
}

export { imageValidator, imageFileNameGenerator, imageUpload, imageDelete }
