import Head from 'next/head'

import { __ } from '@/hooks/query'
import { useQuery } from 'react-query'

import DataTable from '@/components/Table'
import TableHeader from '@/components/TableHeader'
import { useMemo } from 'react'
import { TableText } from '@/shared/table.module'

export default function Index() {
  const { data, status } = useQuery(`@users`, () => __.get('api/users').then((res) => res.data), {
    retry: true,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
  })

  const columns = useMemo(
    () => [
      { Header: '', accessor: 'id' },
      { Header: 'Name', accessor: 'name' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Role', accessor: (d: User) => d.role.replace('p_u_', '') },
      { Header: 'Joined', accessor: (d: User) => new Date(d.created_at).toLocaleDateString()},
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

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>

      <TableHeader title={'Users'} subTitle={'A list of users registered in the system.'} />
      {status === 'success' && <DataTable data={data} columns={columns} />}
    </>
  )
}
