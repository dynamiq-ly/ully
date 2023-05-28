import Head from 'next/head'

import { __ } from '@/hooks/query'
import { useQuery } from 'react-query'

import Avatar from '@/common/Avatar'
import DataTable from '@/components/Table'
import TableHeader from '@/components/TableHeader'

import { ChangeEvent, useMemo, useState } from 'react'
import { TableText } from '@/shared/table.module'

export default function Index() {
  const [filter, setFilter] = useState<string>('')

  const { data, status } = useQuery(`@users`, () => __.get('api/users').then((res) => res.data), {
    retry: true,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
  })

  const columns = useMemo(
    () => [
      { Header: '', accessor: 'id' },
      {
        Header: 'Avatar',
        accessor: 'profile_picture',
        // eslint-disable-next-line @next/next/no-img-element
        Cell: ({ cell: { value } }: any) => <Avatar src={value ? `${process.env.APP_SERVER}storage/store/${value}` : undefined} alt='logo' width={36} height={36} style={{ borderRadius: '100%' }} />,
      },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Store', accessor: 'store.store_name' },
      { Header: 'Role', accessor: (d: User) => d.role.replace('p_u_', '') },
      { Header: 'Joined', accessor: (d: User) => new Date(d.created_at).toLocaleDateString() },
      {
        Header: 'Verified',
        accessor: 'email_verified_at',
        Cell: (props: any) =>
          props.value ? (
            <TableText color={'#C33394'} badge={'#F5DDED'}>
              {new Date(props.value).toLocaleDateString()}
            </TableText>
          ) : (
            <TableText color={'#BC1C1C'} badge={'#FAA4A4'}>
              NO
            </TableText>
          ),
      },
      {
        Header: 'Status',
        accessor: 'account_status',
        Cell: (props: any) =>
          props.value ? (
            <TableText color={'#004D1D'} badge={'#91DDAD'}>
              YES
            </TableText>
          ) : (
            <TableText color={'#BC1C1C'} badge={'#FAA4A4'}>
              NO
            </TableText>
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

    return data.filter((d: User) => d.name.toLowerCase().includes(lowerCaseFilter) || d.email.toLowerCase().includes(lowerCaseFilter))
  }, [data, filter])

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>

      <TableHeader title={'Users'} subTitle={'A list of users registered in the system.'} onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)} />
      {status === 'success' && <DataTable data={filteredData} columns={columns} />}
    </>
  )
}
