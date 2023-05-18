import Head from 'next/head'

import { __ } from '@/hooks/query'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai'

import DataTable from '@/components/Table'
import TableHeader from '@/components/TableHeader'

import { TableText } from '@/shared/table.module'
import { useQuery } from 'react-query'

export default function Index() {
  const { data, status } = useQuery(`@stores`, () => __.get('api/store').then((res) => res.data), {
    retry: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

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
      {
        Header: 'Owner',
        accessor: (d: any) => `${d.user.name}|${d.user.email}`,
        Cell: (props: any) => (
          <>
            <TableText size={7}>{props.value.split('|')[0]}</TableText>
            <TableText size={6} color={'#959595'}>
              {props.value.split('|')[1]}
            </TableText>
          </>
        ),
      },
      { Header: 'Products', accessor: 'products_total' },
      { Header: 'Created', accessor: (d: Store) => new Date(d.created_at).toDateString() },
      { Header: 'Views', accessor: 'store_view_count' },
      {
        Header: 'Featured',
        accessor: 'store_is_featured',
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
      {
        Header: 'Active',
        accessor: 'store_status',
        Cell: (props: any) =>
          props.value ? (
            <TableText color={'#14AD4D'}>
              <AiOutlineCheckCircle size={21} />
            </TableText>
          ) : (
            <TableText color={'#F53535'}>
              <AiOutlineClose size={21} />
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
      <TableHeader title={'Stores'} subTitle={'A list of stores registered in the system.'} />
      {status === 'success' && <DataTable data={data} columns={columns} />}
    </>
  )
}
