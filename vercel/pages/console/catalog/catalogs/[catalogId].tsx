import { ChangeEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { __ } from '@/hooks/query'

import Head from 'next/head'
import Input from '@/common/Input'
import Button from '@/common/Button'
import Upload from '@/common/Upload'
import { __auth } from '@/context/AuthProvider'
import TableHeader from '@/components/TableHeader'

import { StoreCreation } from '@/styles/store.style'
import { SelectWrapper } from '@/common/ui/input.element'

type FileWithPreview = {
  file: File
  dataURL: string
}

type CatalogNew = {
  id: number | undefined
  catalog_name: string
  catalog_image: string
  catalog_type: string
  store_id: number
}

export default function Index() {
  const { query, push } = useRouter()
  const { currentUser } = __auth()
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPreview[]>([])

  const { data, status } = useQuery(
    ['@catalogs-key', query.catalogId],
    async () => {
      const res = await __.get(`api/store/catalog/${query.catalogId}`)
      return res.data
    },
    {
      retry: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      enabled: query.catalogId !== 'create', // Enable the query only when query.catalogId is not 'create'
    }
  )

  const [catalog, setCatalog] = useState<CatalogNew>(
    (data as CatalogNew) || {
      catalog_name: '',
      catalog_image: '',
      catalog_type: '',
      store_id: undefined,
    }
  )

  const handleFormChange = (binding: string, value: string | File | null) => setCatalog({ ...catalog, [binding]: value })

  useEffect(() => {
    if (query.catalogId === 'create') __.get(`api/users/${currentUser?.id}`).then((res) => setCatalog({ ...catalog, store_id: res.data.store.id }))
  }, []) // eslint-disable-line

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      handleFormChange('catalog_image', uploadedFiles[0]?.file)
    } else {
      handleFormChange('catalog_image', null)
    }
  }, [uploadedFiles]) // eslint-disable-line

  useEffect(() => {
    if (query.catalogId === 'create') return
    if (status === 'success') {
      setCatalog(data)
    }
  }, [status]) // eslint-disable-line

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>

      <TableHeader
        title={query.catalogId === 'create' ? 'Create catalogs' : catalog.catalog_name}
        subTitle={query.catalogId === 'create' ? 'Get started on your journey by creating your own catalogs' : ''}
        search={false}
      />

      {status === 'loading' ? (
        'Loading...'
      ) : (
        <StoreCreation>
          <Input placeholder={'catalog name'} defaultValue={catalog.catalog_name} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('catalog_name', e.target.value)} />
          <SelectWrapper onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFormChange('catalog_type', e.target.value)}>
            <option value='' hidden>
              Select your type...
            </option>
            {catalog_types.map((type, index) => (
              <option key={index} value={type} selected={type === catalog.catalog_type}>
                {type}
              </option>
            ))}
          </SelectWrapper>
          <Upload files={uploadedFiles} onFilesSelect={setUploadedFiles} />
          <Button
            title={query.catalogId === 'create' ? 'create catalog' : 'update catalog'}
            onClick={() => {
              if (query.catalogId === 'create') {
                __.post('api/store/catalog', catalog, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                }).then(() => push('/console/catalog/catalogs'))
              } else {
                __.post(
                  `api/store/catalog/${query.catalogId}`,
                  { ...catalog, _method: 'PATCH' },
                  {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  }
                ).then(() => push('/console/catalog/catalogs'))
              }
            }}
          />
        </StoreCreation>
      )}
    </>
  )
}

const catalog_types: string[] = ['TYPE_MANS', 'TYPE_WOMENS', 'TYPE_KIDS', 'TYPE_ACCESSORIES', 'TYPE_OTHERS']
