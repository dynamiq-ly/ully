import { ChangeEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { __ } from '@/hooks/query'

import Head from 'next/head'
import Input from '@/common/Input'
import Button from '@/common/Button'
import { __auth } from '@/context/AuthProvider'
import TableHeader from '@/components/TableHeader'

import { StoreCreation } from '@/styles/store.style'
import { SelectWrapper } from '@/common/ui/input.element'

export default function Index() {
  const { query, push } = useRouter()

  const { data: catalog } = useQuery(
    '@catalogs',
    async () => {
      const res = await __.get('api/store/catalog')
      return res.data
    },
    {
      refetchOnMount: true,
      initialData: [],
    }
  )

  const { data, status } = useQuery(
    ['@category-key', query.categoryId],
    async () => {
      const res = await __.get(`api/store/category/${query.categoryId}`)
      return res.data
    },
    {
      retry: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      enabled: query.categoryId !== 'create', // Enable the query only when query.categoryId is not 'create'
    }
  )

  const [category, setCategory] = useState<Category>(
    (data as Category) || {
      id: undefined,
      category_name: '',
      catalog_id: undefined,
    }
  )

  const handleFormChange = (binding: string, value: string) => setCategory({ ...category, [binding]: value })

  useEffect(() => {
    if (query.categoryId === 'create') return
    if (status === 'success') {
      setCategory(data)
    }
  }, [status]) // eslint-disable-line

  console.log(category)

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>

      <TableHeader
        title={query.categoryId === 'create' ? 'Create catalogs' : category.category_name}
        subTitle={query.categoryId === 'create' ? 'Get started on your journey by creating your own categoriy lists' : ''}
        search={false}
      />

      {status === 'loading' ? (
        'loading...'
      ) : (
        <StoreCreation>
          <Input placeholder={'category name'} defaultValue={category.category_name} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('category_name', e.target.value)} />
          <SelectWrapper onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFormChange('catalog_id', e.target.value)}>
            <option value='' hidden>
              Select your Catalog...
            </option>
            {catalog.map((type: Catalog) => (
              <option key={type.id} value={type.id} selected={type.id === category.catalog_id}>
                {type.catalog_name}
              </option>
            ))}
          </SelectWrapper>

          <Button
            title={query.categoryId === 'create' ? 'create catalog' : 'update catalog'}
            onClick={() => {
              if (query.categoryId === 'create') {
                __.post('api/store/category', category).then(() => push('/console/catalog/categories'))
              } else {
                __.post(`api/store/category/${query.categoryId}`, { ...category, _method: 'PATCH' }).then(() => push('/console/catalog/categories'))
              }
            }}
          />
        </StoreCreation>
      )}
    </>
  )
}
