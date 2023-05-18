import Head from 'next/head'

import { __ } from '@/hooks/query'
import { useQuery } from 'react-query'
import { useMemo } from 'react'

import DataTable from '@/components/Table'
import TableHeader from '@/components/TableHeader'

export default function Index() {
  const { data, status } = useQuery(`@categories`, () => __.get('api/store/category').then((res) => res.data), {
    retry: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  const columns = useMemo(
    () => [
      { Header: '', accessor: 'id' },
      { Header: 'Name', accessor: 'category_name' },
      { Header: 'Products', accessor: 'products.length' },
    ],
    []
  )

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <TableHeader title={'Categories'} subTitle={'A list of your sub categories.'} />
      {status === 'success' && <DataTable data={data} columns={columns} />}
    </>
  )
}
