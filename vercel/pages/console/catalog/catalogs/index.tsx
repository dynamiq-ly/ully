import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'

import { __ } from '@/hooks/query'
import { useQuery } from 'react-query'

import Avatar from '@/common/Avatar'
import DataTable from '@/components/Table'
import TableHeader from '@/components/TableHeader'

import { BiEditAlt, BiTrashAlt } from 'react-icons/bi'
import { TableAction } from '@/shared/table.module'

export default function Index() {
  const { push } = useRouter()
  const [filter, setFilter] = useState<string>('')

  const { data, status, refetch } = useQuery(`@catalogs`, () => __.get('api/store/catalog').then((res) => res.data), {
    retry: true,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
  })

  const columns = useMemo(
    () => [
      {
        Header: '',
        accessor: 'catalog_image',
        Cell: ({ cell: { value } }: any) => <Avatar src={`${process.env.APP_SERVER}storage/product/catalog/${value}`} alt='catalog image' width={36} height={36} style={{ borderRadius: '100%' }} />,
      },
      { Header: 'Name', accessor: 'catalog_name' },
      { Header: 'Type', accessor: (d: Catalog) => d.catalog_type.replace('TYPE_', 'For ').toLocaleUpperCase() },
      { Header: 'Categories', accessor: 'categories.length' },
      {
        Header: '',
        accessor: 'id',
        Cell: ({ cell: { value } }: any) => (
          <TableAction>
            <button onClick={() => push(`/console/catalog/catalogs/${value}`)}>
              <BiTrashAlt size={18} />
              edit
            </button>
            <button
              onClick={() =>
                __.delete(`api/store/catalog/${value}`).then((res) => {
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

    return data.filter((d: Catalog) => d.catalog_name.toLowerCase().includes(lowerCaseFilter) || d.catalog_type.toLowerCase().includes(lowerCaseFilter))
  }, [data, filter])

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <TableHeader
        title={'Catalogs'}
        subTitle={'A list of your categories.'}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
        button={{
          adder: 'new',
          adderPath: '/console/catalog/catalogs/create',
        }}
      />
      {status === 'success' && <DataTable data={filteredData} columns={columns} />}
    </>
  )
}
