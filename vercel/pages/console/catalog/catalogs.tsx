import Head from 'next/head'

import { __ } from '@/hooks/query'
import { useQuery } from 'react-query'
import { useMemo } from 'react'

import DataTable from '@/components/Table'
import TableHeader from '@/components/TableHeader'

export default function Index() {
  const { data, status } = useQuery(`@catalogs`, () => __.get('api/store/catalog').then((res) => res.data), {
    retry: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  const columns = useMemo(
    () => [
      { Header: '', accessor: 'id' },
      { Header: 'Name', accessor: 'catalog_name' },
      { Header: 'Type', accessor: 'catalog_type' },
      { Header: 'Categories', accessor: 'categories.length' },
    ],
    []
  )

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <TableHeader title={'Catalogs'} subTitle={'A list of your categories.'} />
      {status === 'success' && <DataTable data={data} columns={columns} />}
    </>
  )
}
