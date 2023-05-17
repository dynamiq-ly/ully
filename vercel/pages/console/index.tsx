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
        Cell: (props: any) => <img src={`${process.env.APP_SERVER}storage/store/logo/${props.value}`} alt='logo' width={36} height={36} style={{ borderRadius: '100%' }} />,
      },
      { Header: 'Name', accessor: 'store_name' },
      { Header: 'Owner', accessor: (d: any) => `${d.user.name}|${d.user.email}`, Cell: (props: any) => props.value.split('|').map((el: string, key: number) => <p key={key}>{el}</p>) },
      { Header: 'Catalogs', accessor: 'catalogs.length' },
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
      <p>This is the console page. You can access this page by going to </p>

      <DataTable data={data} columns={columns} />
    </>
  )
}
