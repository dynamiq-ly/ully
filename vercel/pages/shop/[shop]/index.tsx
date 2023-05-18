import Head from 'next/head'

export default function Shop() {
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
        <link rel='icon' href='/logo.png' />
      </Head>
    </>
  )
}
