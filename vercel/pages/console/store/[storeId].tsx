import Head from 'next/head'
import { useState } from 'react'

import Input from '@/common/Input'
import Upload from '@/common/Upload'
import TableHeader from '@/components/TableHeader'

export default function Index() {
  const [store, setStore] = useState<VendorStore>({
    store_logo: null,
    store_name: '',
    store_description: '',
    store_thumbnail: null,
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
    created_at: '',
    updated_at: '',
  })

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>

      <TableHeader title={store.store_name || 'Create Your Store'} subTitle={'Get started in your journey by creating your own store.'} search={false} />

      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Upload />
    </>
  )
}

type VendorStore = {
  store_logo: File | null
  store_name: string
  store_description: string
  store_thumbnail: File | null
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
  created_at: string
  updated_at: string
}
