import Consolelogout from '@/components/Consolelogout'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
        <link rel='icon' href='/logo.png' />
      </Head>

      <main>
        <p>this is a preview</p>
        <Consolelogout />
      </main>
    </>
  )
}
