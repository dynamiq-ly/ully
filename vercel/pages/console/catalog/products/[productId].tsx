import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'

import { useQuery } from 'react-query'

import Button from '@/common/Button'
import Input from '@/common/Input'
import Upload from '@/common/Upload'
import { __ } from '@/hooks/query'
import TableHeader from '@/components/TableHeader'

import { SelectWrapper } from '@/common/ui/input.element'
import { StoreCreation } from '@/styles/store.style'

type FileWithPreview = {
  file: File
  dataURL: string
}

export default function Index() {
  const { query, push } = useRouter()
  const [uploadedFiles, setUploadedFiles] = useState<FileWithPreview[]>([])

  const { data: categories } = useQuery(
    '@categories',
    async () => {
      const res = await __.get('api/store/category')
      return res.data
    },
    {
      refetchOnMount: true,
      initialData: [],
    }
  )

  const { data, status } = useQuery(
    ['@product-key', query.productId],
    async () => {
      const res = await __.get(`api/store/product/${query.productId}`)
      return res.data
    },
    {
      retry: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      enabled: query.productId !== 'create', // Enable the query only when query.categoryId is not 'create'
    }
  )

  const [product, setProduct] = useState<Product>(
    (data as Product) || {
      id: 0,
      product_colors: '',
      product_description: '',
      product_details: '',
      product_name: '',
      product_price: '',
      product_reference: '',
      product_slug: '',
      product_status: 1,
      images: [],
      category_id: 0,
    }
  )

  const handleFormChange = (binding: string, value: string | File[] | number | null) => setProduct({ ...product, [binding]: value })

  useEffect(() => {
    if (uploadedFiles.length > 0) {
      handleFormChange(
        'images',
        uploadedFiles.map((fileWithPreview) => fileWithPreview.file)
      )
    } else {
      handleFormChange('images', null)
    }
  }, [uploadedFiles]) // eslint-disable-line

  useEffect(() => {
    if (query.productId === 'create') return
    if (status === 'success') {
      setProduct(data)
    }
  }, [status]) // eslint-disable-line

  console.table(product)

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>

      <TableHeader
        title={query.productId === 'create' ? 'Create Products' : product.product_name}
        subTitle={query.productId === 'create' ? 'Get started on your journey by publishing your brans products.' : ''}
        search={false}
      />

      {status === 'loading' ? (
        'loading...'
      ) : (
        <StoreCreation>
          <Input placeholder='product_name' value={product.product_name} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('product_name', e.target.value)} />
          <Input placeholder='product_price' type='number' value={product.product_price} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('product_price', e.target.value)} />
          <Input placeholder='product_slug' value={product.product_slug} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('product_slug', e.target.value)} />
          <Input placeholder='product_description' value={product.product_description} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('product_description', e.target.value)} />
          <Input placeholder='product_details' value={product.product_details} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('product_details', e.target.value)} />
          <Input placeholder='product_colors' value={product.product_colors} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('product_colors', e.target.value)} />

          <SelectWrapper onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFormChange('category_id', e.target.value)}>
            <option value='' hidden>
              Select your Catalog...
            </option>
            {categories.map((category: Category) => (
              <option key={category.id} value={category.id} selected={category.id === product.category_id}>
                {category.catalog.catalog_type.replace('TYPE_', 'FOR ')} - {category.catalog.catalog_name} - {category.category_name}
              </option>
            ))}
          </SelectWrapper>
          <Upload files={uploadedFiles} onFilesSelect={setUploadedFiles} />
          <Button
            title={query.productId === 'create' ? 'create product' : 'update product'}
            onClick={() => {
              if (query.productId === 'create') {
                const catalogInitials = categories.find((category: Category) => category.id === product.category_id)?.catalog.catalog_type.slice(5, 6)
                const categoryInitials = categories.find((category: Category) => category.id === product.category_id)?.category_name.slice(0, 1)
                const productInitials = product.product_name.slice(0, 1)
                const randomNumber = Math.floor(100 + Math.random() * 900) // Generate a random 3-digit number

                const reference = `${catalogInitials}-${categoryInitials}-${productInitials}-${randomNumber}`

                __.post(
                  'api/store/product',
                  { ...product, product_reference: reference },
                  {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  }
                ).then(() => push('/console/catalog/products'))
              } else {
                __.post(
                  `api/store/product/${query.productId}`,
                  { ...product, _method: 'PATCH' },
                  {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                    },
                  }
                ).then(() => push('/console/catalog/products'))
              }
            }}
          />
        </StoreCreation>
      )}
    </>
  )
}
