import Head from 'next/head'

import TableHeader from '@/components/TableHeader'

export default function Index() {
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <TableHeader title={'Dashboard'} subTitle={'Dashboard Section.'} search={false} />
      <p>This is the console page. You can access this page by going to </p>
    </>
  )
}
