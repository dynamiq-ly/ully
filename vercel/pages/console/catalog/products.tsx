import Head from 'next/head'

import { __ } from '@/hooks/query'
import { useQuery } from 'react-query'
import { useEffect, useMemo, useState } from 'react'

import DataTable from '@/components/Table'
import TableHeader from '@/components/TableHeader'

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
      { Header: 'price', accessor: 'product_price' },
    ],
    []
  )

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <TableHeader title={'Stores'} subTitle={'A list of stores registered in the system.'} />
      {status === 'success' && <DataTable data={data} columns={columns} />}
    </>
  )
}
