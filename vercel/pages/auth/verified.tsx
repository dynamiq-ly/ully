import Head from 'next/head'
import { useRouter } from 'next/router'

import Button from '@/common/Button'

import { AuthWrapper } from '@/styles/auth.syle'
import { Form, FormHeader } from '@/shared/form.module'

export default function Index() {
  const { push } = useRouter()

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Sign In</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <AuthWrapper>
        <Form initial={{ opacity: 0, x: '-5%' }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring' }}>
          <FormHeader>
            <p>Your email is verified</p>
            <p>You can now use your account freely without limitations.</p>
          </FormHeader>
          <Button title={'go home'} onClick={() => push('/')} bg={'primary'} />
        </Form>
      </AuthWrapper>
    </>
  )
}

type Form = {
  email: string
}
