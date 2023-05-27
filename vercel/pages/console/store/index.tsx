import Head from 'next/head'

import { __ } from '@/hooks/query'
import { useQuery } from 'react-query'
import { __auth } from '@/context/AuthProvider'

import TableHeader from '@/components/TableHeader'
import { ImageWrapper, UploadedImage } from '@/common/ui/upload.element'
import Avatar from '@/common/Avatar'
import { StoreWrapper } from '@/styles/store.style'

export default function Index() {
  const { currentUser } = __auth()

  const { data, status } = useQuery(`@store`, () => __.get(`api/users/${currentUser?.id}`).then((res) => res.data), {
    retry: true,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    refetchOnReconnect: false,
  })

  if (status === 'loading') {
    return <p>loading ....</p>
  }

  if (status === 'success' && !data.store) {
    return (
      <>
        <TableHeader title={'Store'} subTitle={'Dashboard Section.'} search={false} button={{ adder: 'create', adderPath: '/console/store/create' }} />
        <StoreWrapper style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Avatar
            width={300}
            height={300}
            src={
              'https://static.vecteezy.com/system/resources/previews/009/418/828/original/shop-marketing-3d-icon-illustration-for-your-website-user-interface-and-presentation-3d-render-illustration-free-png.png'
            }
            alt={`store image`}
          />
          <h1>Start Creating you store</h1>
        </StoreWrapper>
      </>
    )
  }

  console.log(`${process.env.APP_SERVER}storage/store/${data.store.store_logo}`)

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      {status === 'success' && data.store && (
        <>
          <TableHeader title={'Store'} subTitle={'Dashboard Section.'} search={false} button={{ adder: 'edit', adderPath: `/console/store/${data.store.id}` }} />
          <StoreWrapper style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Avatar
              width={300}
              height={300}
              src={
                'https://static.vecteezy.com/system/resources/previews/009/418/828/original/shop-marketing-3d-icon-illustration-for-your-website-user-interface-and-presentation-3d-render-illustration-free-png.png'
              }
              alt={`${data.store.store_name} store image`}
            />
          </StoreWrapper>
        </>
      )}
    </>
  )
}
