import Head from 'next/head'

import Input from '@/components/input/Input'
import Button from '@/components/button/Button'

import { BiEnvelope } from 'react-icons/bi'
import { StyledForm } from '@/styles/auth.module'

export default function Index() {
  return (
    <>
      <Head>
        <title>Ully | Reset Mail</title>
      </Head>

      <StyledForm>
        <div>
          <p>reset mail</p>
          <p>get your password reset email.</p>
        </div>
        <Input placeholder={'email'} type={'email'} icon={<BiEnvelope />} />
        <Button title={'sign in'} disabled />
      </StyledForm>
    </>
  )
}
