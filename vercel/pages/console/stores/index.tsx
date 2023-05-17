import Head from 'next/head'

import { __ } from '@/hooks/query'
import { useEffect, useMemo, useState } from 'react'

import DataTable from '@/components/Table'

export default function Index() {
  const [data, setData] = useState([])

  const columns = useMemo(
    () => [
      { Header: '', accessor: 'id' },
      {
        Header: '',
        accessor: 'store_logo',
        // eslint-disable-next-line @next/next/no-img-element
        Cell: (props: any) => <img src={`${process.env.APP_SERVER}storage/store/logo/${props.value}`} alt='logo' width={36} height={36} style={{ borderRadius: '100%' }} />,
      },
      { Header: 'Name', accessor: 'store_name' },
      { Header: 'Owner', accessor: (d: Store) => `${d.user.name}|${d.user.email}`, Cell: (props: any) => props.value.split('|').map((el: string, key: number) => <p key={key}>{el}</p>) },
      { Header: 'Products', accessor: 'products_total' },
      { Header: 'Created', accessor: (d: Store) => new Date(d.created_at).toDateString() },
    ],
    []
  )

  useEffect(() => {
    __.get('api/store').then((res) => setData(res.data))
  }, [])

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>

      <DataTable data={data} columns={columns} />
    </>
  )
}
