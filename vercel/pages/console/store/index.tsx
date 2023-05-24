import Head from 'next/head'

import { __ } from '@/hooks/query'
import { useQuery } from 'react-query'
import { __auth } from '@/context/AuthProvider'

import TableHeader from '@/components/TableHeader'

export default function Index() {
  const { currentUser } = __auth()

  const { data, status } = useQuery(`@store`, () => __.get(`api/users/${currentUser?.id}`).then((res) => res.data), {
    retry: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      {status === 'success' && data.store ? (
        <TableHeader title={'Store'} subTitle={'Dashboard Section.'} search={false} button={{ adder: 'edit', adderPath: `/console/store/${data.store.id}` }} />
      ) : (
        <TableHeader title={'Store'} subTitle={'Dashboard Section.'} search={false} button={{ adder: 'edit', adderPath: '/console/store/create' }} />
      )}
    </>
  )
}
