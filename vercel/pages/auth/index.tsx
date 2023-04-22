import Head from 'next/head'
import Link from 'next/link'

import Input from '@/components/input/Input'
import Button from '@/components/button/Button'

import { BiEnvelope, BiLockOpenAlt } from 'react-icons/bi'
import { StyledForm, StyledAuthResetLink, StyledAuthFooter } from '@/styles/auth.module'

export default function Index() {
  return (
    <>
      <Head>
        <title>Ully | Login</title>
      </Head>

      <StyledForm>
        <div>
          <p>{"let's"} get started</p>
          <p>sign in to access your account.</p>
        </div>
        <Input placeholder={'email'} type={'email'} icon={<BiEnvelope />} />
        <Input placeholder={'password'} type={'password'} icon={<BiLockOpenAlt />} />
        <Button title={'sign in'} />
        <StyledAuthResetLink>
          forgot password?{' '}
          <Link passHref href={'/auth/send-email'}>
            reset here
          </Link>
          .
        </StyledAuthResetLink>
      </StyledForm>
    </>
  )
}
