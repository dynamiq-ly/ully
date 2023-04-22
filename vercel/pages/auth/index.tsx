import Head from 'next/head'

import Logo from '@/components/logo/Logo'
import Input from '@/components/input/Input'
import Button from '@/components/button/Button'

import { BiEnvelope, BiLockOpenAlt } from 'react-icons/bi'
import { StyledAuth, StyledAuthForm, StyledAuthBanner, StyledAuthFormBody, StyledForm } from '@/styles/auth.module'

export default function Index() {
  return (
    <>
      <Head>
        <title>Ully | Login</title>
      </Head>
      <StyledAuth>
        <StyledAuthForm>
          <div>
            <Logo />
          </div>
          <StyledAuthFormBody>
            <StyledForm>
              <div>
                <p>{"let's"} get started</p>
                <p>sign in to access your account.</p>
              </div>
              <Input placeholder={'email'} type={'email'} icon={<BiEnvelope />} />
              <Input placeholder={'password'} type={'password'} icon={<BiLockOpenAlt />} />
              <Button title={'sign in'} />
            </StyledForm>
          </StyledAuthFormBody>
          <div>test</div>
        </StyledAuthForm>
        <StyledAuthBanner>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='https://docs.craft.do/static/media/craft-apps.366c43e3.png' alt={'banner image login form'} />
        </StyledAuthBanner>
      </StyledAuth>
    </>
  )
}
