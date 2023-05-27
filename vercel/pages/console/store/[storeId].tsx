import React, { ChangeEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import Head from 'next/head'
import Input from '@/common/Input'
import Button from '@/common/Button'
import Upload from '@/common/Upload'
import { __auth } from '@/context/AuthProvider'
import TableHeader from '@/components/TableHeader'

import { __ } from '@/hooks/query'
import { StoreCreation } from '@/styles/store.style'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'

type FileWithPreview = {
  file: File
  dataURL: string
}

type VendorStore1 = {
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

type VendorStore2 = {
  id?: number
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
  store_status: number
  store_is_featured: number
  store_view_count: number
  user_id: number | undefined
}

export default function Index() {
  const { query, push } = useRouter()
  const { currentUser } = __auth()
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPreview[]>([])

  const { data, status } = useQuery(
    ['@store-owner', query.storeId],
    async () => {
      const res = await __.get(`api/store/find/${query.storeId}`)
      return res.data
    },
    {
      retry: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      enabled: query.storeId !== 'create', // Enable the query only when query.storeId is not 'create'
    }
  )

  const [store, setStore] = useState<VendorStore1 | VendorStore2>(
    (data as VendorStore2) || {
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
      store_status: 1,
      store_is_featured: 0,
      store_view_count: 0,
      user_id: currentUser?.id,
    }
  )

  const handleFormChange = (binding: string, value: string | File | null) => setStore({ ...store, [binding]: value })

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      handleFormChange('store_logo', uploadedFiles[0]?.file)
    } else {
      handleFormChange('store_logo', null)
    }
  }, [uploadedFiles]) // eslint-disable-line

  useEffect(() => {
    if (query.storeId === 'create') return
    if (status === 'success') {
      setStore(data)
    }
  }, [status]) // eslint-disable-line

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>

      <TableHeader
        title={query.storeId === 'create' ? 'Create Your Store' : store.store_name}
        subTitle={query.storeId === 'create' ? 'Get started on your journey by creating your own store.' : ''}
        search={false}
      />

      {status === 'loading' ? (
        'loading'
      ) : (
        <StoreCreation>
          <Input placeholder={'store name'} value={store.store_name} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_name', e.target.value)} />
          <Input placeholder={'store description'} value={store.store_description} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_description', e.target.value)} />
          <Input placeholder={'store email'} value={store.store_email} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_email', e.target.value)} />
          <Input placeholder={'store phone'} value={store.store_phone} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_phone', e.target.value)} />
          <Input placeholder={'store address'} value={store.store_address} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_address', e.target.value)} />
          <Input
            placeholder={'store instagram'}
            value={store.store_instagram}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_instagram', e.target.value)}
            icon={<AiOutlineInstagram />}
          />
          <Input
            placeholder={'store facebook'}
            value={store.store_facebook}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_facebook', e.target.value)}
            icon={<AiOutlineFacebook />}
          />
          <Input
            placeholder={'store twitter'}
            value={store.store_twitter}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_twitter', e.target.value)}
            icon={<AiOutlineTwitter />}
          />
          <Input
            placeholder={'store whatsapp'}
            value={store.store_whatsapp}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('store_whatsapp', e.target.value)}
            icon={<AiOutlineWhatsApp />}
          />
          <Upload files={uploadedFiles} onFilesSelect={setUploadedFiles} />
          <Button
            title={query.storeId === 'create' ? 'create store' : 'update store'}
            onClick={() => {
              if (query.storeId === 'create') {
                __.post('api/store', store, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                }).then(() => push('/console/store'))
              } else {
                __.post(
                  `api/store/${query.storeId}`,
                  { ...store, _method: 'PATCH' },
                  {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  }
                ).then(() => push('/console/store'))
              }
            }}
          />
        </StoreCreation>
      )}
    </>
  )
}
