import Head from 'next/head'

import { __ } from '@/hooks/query'
import { useQuery } from 'react-query'
import { ChangeEvent, useMemo, useState } from 'react'

import DataTable from '@/components/Table'
import TableHeader from '@/components/TableHeader'

import { TableAction, TableText } from '@/shared/table.module'
import { AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai'
import { BiEditAlt, BiTrashAlt } from 'react-icons/bi'
import { useRouter } from 'next/router'

export default function Index() {
  const { push } = useRouter()
  const [filter, setFilter] = useState<string>('')

  const { data, status, refetch } = useQuery(`@products`, () => __.get('api/store/product').then((res) => res.data), {
    retry: true,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
  })

  const columns = useMemo(
    () => [
      { Header: 'Reference', accessor: 'product_reference' },
      { Header: 'Name', accessor: 'product_name' },
      { Header: 'price', accessor: (d: Product) => `${d.product_price} TND` },
      { Header: 'Category', accessor: 'category.category_name' },
      { Header: 'Created', accessor: (d: Product) => new Date(d.updated_at).toDateString() },
      {
        Header: 'Status',
        accessor: 'product_status',
        Cell: (props: any) =>
          props.value ? (
            <TableText color={'#14AD4D'}>
              <AiOutlineCheckCircle size={21} />
            </TableText>
          ) : (
            <TableText color={'#F53535'}>
              <AiOutlineClose size={21} />
            </TableText>
          ),
      },
      {
        Header: '',
        accessor: 'id',
        Cell: ({ cell: { value } }: any) => (
          <TableAction>
            <button onClick={() => push(`/console/catalog/products/${value}`)}>
              <BiTrashAlt size={18} />
              edit
            </button>
            <button
              onClick={() =>
                __.delete(`api/store/product/${value}`).then((res) => {
                  res.status === 200 && refetch()
                })
              }>
              <BiEditAlt size={18} />
              delete
            </button>
          </TableAction>
        ),
      },
    ],
    [refetch, push]
  )

  const filteredData = useMemo(() => {
    if (!data) {
      return []
    }

    if (!filter) {
      return data
    }

    const lowerCaseFilter = filter.toLowerCase()

    return data.filter(
      (d: Product) =>
        d.product_name.toLowerCase().includes(lowerCaseFilter) || d.product_reference.toLowerCase().includes(lowerCaseFilter) || d.category.category_name.toLowerCase().includes(lowerCaseFilter)
    )
  }, [data, filter])

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <TableHeader
        title={'Products'}
        subTitle={'A list of your products.'}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
        button={{
          adder: 'new',
          adderPath: '/console/catalog/products/create',
        }}
      />
      {status === 'success' && <DataTable data={filteredData} columns={columns} />}
    </>
  )
}
