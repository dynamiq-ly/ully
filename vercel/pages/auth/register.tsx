import Head from 'next/head'
import { ChangeEvent, useState } from 'react'
import { TbMail, TbLock, TbArrowNarrowRight, TbUser } from 'react-icons/tb'

import Input from '@/common/Input'
import Checkbox from '@/common/Checkbox'
import Button from '@/common/Button'
import Link from '@/common/Link'

import { AuthWrapper } from '@/styles/auth.syle'
import { Form, FormGroup, FormHeader } from '@/shared/form.module'

import { __auth } from '@/context/AuthProvider'

export default function Index() {
  const { register } = __auth()

  const [isForm, setForm] = useState<Form>({
    name: '',
    email: '',
    password: '',
    profile_picture: '',
    role: 'P_U_Client',
    account_status: true,
  })

  const handleFormChange = (binding: string, value: string | boolean) => setForm({ ...isForm, [binding]: value })

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Sign In</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <AuthWrapper>
        <Form initial={{ opacity: 0, x: '-5%' }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring' }}>
          <FormHeader>
            <p>Sign In</p>
            <p>Sign in to your account to continue.</p>
          </FormHeader>
          <Input value={isForm.name} type={'email'} placeholder={'Type your name'} icon={<TbUser />} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('name', e.target.value)} />
          <Input value={isForm.email} type={'email'} placeholder={'Type your mail'} icon={<TbMail />} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('email', e.target.value)} />
          <Input
            value={isForm.password}
            type={'password'}
            placeholder={'Type your password'}
            icon={<TbLock />}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('password', e.target.value)}
          />
          <Button
            title={'create account'}
            onClick={() => {
              register(isForm)
            }}
          />
          <Link href={'/auth/login'} title={'login to your account'} icon={<TbArrowNarrowRight />} direction />
        </Form>
      </AuthWrapper>
    </>
  )
}

type Form = {
  name: string
  email: string
  password: string
  profile_picture?: string
  role: 'P_U_Client' | 'P_U_Vendor'
  account_status: boolean
}
