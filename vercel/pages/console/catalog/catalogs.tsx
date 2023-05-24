import Head from 'next/head'

import { __ } from '@/hooks/query'
import { useQuery } from 'react-query'
import { ChangeEvent, useMemo, useState } from 'react'

import DataTable from '@/components/Table'
import TableHeader from '@/components/TableHeader'

export default function Index() {
  const [filter, setFilter] = useState<string>('')

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

  const filteredData = useMemo(() => {
    if (!data) {
      return []
    }

    if (!filter) {
      return data
    }

    const lowerCaseFilter = filter.toLowerCase()

    return data.filter((d: Catalog) => d.catalog_name.toLowerCase().includes(lowerCaseFilter) || d.catalog_type.toLowerCase().includes(lowerCaseFilter))
  }, [data, filter])

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <TableHeader title={'Catalogs'} subTitle={'A list of your categories.'} onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)} />
      {status === 'success' && <DataTable data={filteredData} columns={columns} />}
    </>
  )
}
