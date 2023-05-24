import Head from 'next/head'
import { ChangeEvent, useEffect, useState } from 'react'

import Input from '@/common/Input'
import Button from '@/common/Button'
import Upload from '@/common/Upload'
import TableHeader from '@/components/TableHeader'

import { __ } from '@/hooks/query'

import { StoreCreation } from '@/styles/store.style'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import { __auth } from '@/context/AuthProvider'

type FileWithPreview = {
  file: File
  dataURL: string
}

export default function Index() {
  const { currentUser } = __auth()
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPreview[]>([])

  const [store, setStore] = useState<VendorStore>({
    store_logo: null,
    store_name: '',
    store_description: '',
    store_email: '',
    store_phone: '',
    store_address: '',
    store_instagram: '',
    store_facebook: '',
    store_twitter: '',
    store_whatsapp: '',
    user_id: currentUser?.id,
  })

  const handleFormChange = (binding: string, value: string | File | null) => setStore({ ...store, [binding]: value })

  useEffect(() => {
    uploadedFiles.length > 0 ? handleFormChange('store_logo', uploadedFiles[0]?.file) : handleFormChange('store_logo', null)
  }, [uploadedFiles]) // eslint-disable-line

  console.log('files => ', uploadedFiles)
  console.log('store => ', store)

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>

      <TableHeader title={store.store_name || 'Create Your Store'} subTitle={'Get started in your journey by creating your own store.'} search={false} />

      <StoreCreation>
        <Input placeholder={'store name'} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_name', e.target.value)} />
        <Input placeholder={'store description'} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_description', e.target.value)} />
        <Input placeholder={'store email'} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_email', e.target.value)} />
        <Input placeholder={'store phone'} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_phone', e.target.value)} />
        <Input placeholder={'store address'} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_address', e.target.value)} />
        <Input placeholder={'store instagram'} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_instagram', e.target.value)} icon={<AiOutlineInstagram />} />
        <Input placeholder={'store facebook'} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_facebook', e.target.value)} icon={<AiOutlineFacebook />} />
        <Input placeholder={'store twitter'} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_twitter', e.target.value)} icon={<AiOutlineTwitter />} />
        <Input placeholder={'store whatsapp'} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_whatsapp', e.target.value)} icon={<AiOutlineWhatsApp />} />
        <Upload files={uploadedFiles} onFilesSelect={setUploadedFiles} />
        <Button
          title={'create store'}
          onClick={() => {
            __.post('api/store', store, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
          }}
        />
      </StoreCreation>
    </>
  )
}

type VendorStore = {
  store_logo: File | null
  store_name: string
  store_description: string
  store_email: string
  store_phone: string
  store_address: string
  store_instagram: string
  store_facebook: string
  store_twitter: string
  store_whatsapp: string
  user_id: number | undefined
}
