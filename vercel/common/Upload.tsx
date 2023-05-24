// @ts-nocheck
import { useState } from 'react'
import type { ChangeEvent, FC } from 'react'

import { ImageStyled, ImageWrapper, UploadInput, UploadWrapper, UploadedImage } from './ui/upload.element'
import { TbTrash } from 'react-icons/tb'

type FileWithPreview = {
  file: File
  dataURL: string
}

type Props = {
  files: FileWithPreview[]
  onFilesSelect: (files: FileWithPreview[]) => void
}

const Upload: FC<Props> = ({ onFilesSelect, files }) => {
  //   const [files, onFilesSelect] = useState<FileWithPreview[]>([])

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList | null = event.target.files
    const filesArray: FileWithPreview[] = []

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList.item(i)
      const reader = new FileReader()

      reader.onload = (event) => {
        const dataURL = event.target.result as string
        filesArray.push({ file: file as File, dataURL })
        if (i === fileList.length - 1) {
          onFilesSelect((prevFiles) => [...filesArray, ...prevFiles]) // call the callback function with the uploaded files
        }
      }

      reader.readAsDataURL(file as File)
    }
  }

  const handleFileRemove = (index: number) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    onFilesSelect(() => newFiles)
  }

  return (
    <UploadWrapper>
      <UploadInput>
        <p>Upload</p>
        <p>1:1 Image</p>
        <input type='file' hidden onChange={handleFileSelect} />
      </UploadInput>

      <ImageWrapper>
        {files.map((file, index) => (
          <UploadedImage key={index}>
            <ImageStyled width={30} height={30} src={file.dataURL} alt={file.file.name} />
            <button onClick={() => handleFileRemove(index)}>
              {' '}
              <TbTrash size={21} />
            </button>
          </UploadedImage>
        ))}
      </ImageWrapper>
    </UploadWrapper>
  )
}

export default Upload
