import Head from 'next/head'

import { __ } from '@/hooks/query'
import { useQuery } from 'react-query'
import { ChangeEvent, useMemo, useState } from 'react'

import DataTable from '@/components/Table'
import TableHeader from '@/components/TableHeader'

export default function Index() {
  const [filter, setFilter] = useState<string>('')

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
      { Header: 'Catalog', accessor: 'catalog.catalog_name' },
    ],
    []
  )

  const filteredData = useMemo(() => {
    if (!data) {
      return []
    }

    if (!filter) {
      return data
    }

    const lowerCaseFilter = filter.toLowerCase()

    return data.filter((d: Category) => d.category_name.toLowerCase().includes(lowerCaseFilter) || d.catalog.catalog_name.toLowerCase().includes(lowerCaseFilter))
  }, [data, filter])

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <TableHeader title={'Categories'} subTitle={'A list of your sub categories.'} onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)} />
      {status === 'success' && <DataTable data={filteredData} columns={columns} />}
    </>
  )
}
