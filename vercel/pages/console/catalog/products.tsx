import Head from 'next/head'

import { __ } from '@/hooks/query'
import { useQuery } from 'react-query'
import { useMemo } from 'react'

import DataTable from '@/components/Table'
import TableHeader from '@/components/TableHeader'
import { TableText } from '@/shared/table.module'
import { AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai'

export default function Index() {
  const { data, status } = useQuery(`@products`, () => __.get('api/store/product').then((res) => res.data), {
    retry: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  const columns = useMemo(
    () => [
      { Header: '', accessor: 'id' },
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
    ],
    []
  )

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <TableHeader title={'Products'} subTitle={'A list of your products.'} />
      {status === 'success' && <DataTable data={data} columns={columns} />}
    </>
  )
}
