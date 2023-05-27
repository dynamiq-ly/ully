import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'

import { __ } from '@/hooks/query'
import { useQuery } from 'react-query'

import DataTable from '@/components/Table'
import TableHeader from '@/components/TableHeader'

import { BiEditAlt, BiTrashAlt } from 'react-icons/bi'
import { TableAction } from '@/shared/table.module'

export default function Index() {
  const { push } = useRouter()
  const [filter, setFilter] = useState<string>('')

  const { data, status, refetch } = useQuery(`@categories`, () => __.get('api/store/category').then((res) => res.data), {
    retry: true,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
  })

  const columns = useMemo(
    () => [
      { Header: 'Name', accessor: 'category_name' },
      { Header: 'Products', accessor: 'products.length' },
      { Header: 'Catalog', accessor: 'catalog.catalog_name' },
      {
        Header: '',
        accessor: 'id',
        Cell: ({ cell: { value } }: any) => (
          <TableAction>
            <button onClick={() => push(`/console/catalog/categories/${value}`)}>
              <BiTrashAlt size={18} />
              edit
            </button>
            <button
              onClick={() =>
                __.delete(`api/store/category/${value}`).then((res) => {
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
      <TableHeader
        title={'Categories'}
        subTitle={'A list of your sub categories.'}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
        button={{
          adder: 'new',
          adderPath: '/console/catalog/categories/create',
        }}
      />
      {status === 'success' && <DataTable data={filteredData} columns={columns} />}
    </>
  )
}
