import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Console</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <p>This is the console page. You can access this page by going to </p>
    </>
  )
}
