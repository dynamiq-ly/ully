import Head from 'next/head'
import { ChangeEvent, useState } from 'react'
import { TbMail, TbArrowNarrowLeft } from 'react-icons/tb'

import Input from '@/common/Input'
import Button from '@/common/Button'
import Link from '@/common/Link'

import { AuthWrapper } from '@/styles/auth.syle'
import { Form, FormHeader } from '@/shared/form.module'

export default function Index() {
  const [isForm, setForm] = useState<Form>({
    email: '',
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
            <p>Reset password</p>
            <p>Have no fear. {"we'll"} email you instructions to reset your password.</p>
          </FormHeader>
          <Input value={isForm.email} type={'email'} placeholder={'Type your mail'} icon={<TbMail />} onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('email', e.target.value)} />

          <Button title={'send link'} onClick={() => setForm({ email: '' })} />
          <Link href={'/auth/login'} title={'back to login'} icon={<TbArrowNarrowLeft />} />
        </Form>
      </AuthWrapper>
    </>
  )
}

type Form = {
  email: string
}
