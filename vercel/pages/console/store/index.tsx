import Head from 'next/head'
import { useRouter } from 'next/router'

import { __ } from '@/hooks/query'
import { __auth } from '@/context/AuthProvider'

import TableHeader from '@/components/TableHeader'

import { useQuery } from 'react-query'
import Button from '@/common/Button'

export default function Index() {
  const { push } = useRouter()
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
      {data.store ? <TableHeader title={'Store'} subTitle={'Dashboard Section.'} search={false} /> : <Button title={'create store'} onClick={() => push('/console/store/create')} />}
    </>
  )
}
