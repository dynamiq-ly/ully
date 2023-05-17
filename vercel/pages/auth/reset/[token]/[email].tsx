import Head from 'next/head'
import { ChangeEvent, useState } from 'react'
import { TbArrowNarrowLeft, TbLock } from 'react-icons/tb'

import Input from '@/common/Input'
import Button from '@/common/Button'
import Link from '@/common/Link'

import { __auth } from '@/context/AuthProvider'

import { AuthWrapper } from '@/styles/auth.syle'
import { Form, FormHeader } from '@/shared/form.module'
import { useRouter } from 'next/router'

export default function Index() {
  const { resetPsswd } = __auth()

  const router = useRouter()
  const { token, email } = router.query

  const [isForm, setForm] = useState<Form>({
    password: '',
  })

  const handleFormChange = (binding: string, value: string | boolean) => setForm({ ...isForm, [binding]: value })

  return (
    <>
      <Head>
        <title>{process.env.APP_NAME} | Reset Password</title>
        <link rel='icon' href='/logo.png' />
      </Head>
      <AuthWrapper>
        <Form initial={{ opacity: 0, x: '-5%' }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring' }}>
          <FormHeader>
            <p>Reset password</p>
            <p>Type your new password here, we will redirect you to login if succefull.</p>
          </FormHeader>
          <Input
            value={isForm.password}
            type={'password'}
            placeholder={'Type your password'}
            icon={<TbLock />}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFormChange('password', e.target.value)}
          />

          <Button
            title={'send link'}
            onClick={() => {
              resetPsswd({
                email: email as string,
                token: token as string,
                password: isForm.password,
                password_confirmation: isForm.password,
              })
              setForm({ password: '' })
            }}
          />
          <Link href={'/auth/login'} title={'back to login'} icon={<TbArrowNarrowLeft />} />
        </Form>
      </AuthWrapper>
    </>
  )
}

type Form = {
  password: string
}
