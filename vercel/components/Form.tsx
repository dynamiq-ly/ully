import { ChangeEvent, useState } from 'react'

import Input from '@/common/Input'
import Button from '@/common/Button'

import { FormContainer, FormField, FormGroup, FormHeading, FormLinks, FormOption, FormSubHeading } from '@/styles/form.module'
import Switch from '@/common/Switch'
import Link from 'next/link'
import Logo from '@/shared/Logo'

const Form = () => {
  const [isForm, setForm] = useState<State>({
    email: '',
    password: '',
    remember: false,
  })

  const handleForm = (binding: string, event: string | boolean) => setForm({ ...isForm, [binding]: event })

  return (
    <FormField>
      <FormContainer>
        <Logo />
        <FormGroup>
          <FormHeading>Sign in</FormHeading>
          <FormSubHeading>Sign in to your account to continue.</FormSubHeading>
        </FormGroup>

        <Input placeholder='email' type='email' optional onChange={(e: ChangeEvent<HTMLInputElement>) => handleForm('email', e.target.value)} />
        <Input placeholder='password' type='password' optional onChange={(e: ChangeEvent<HTMLInputElement>) => handleForm('password', e.target.value)} />
        <FormOption>
          <Switch label={'Keep me signed in.'} check={isForm.remember} setCheck={(e: ChangeEvent<HTMLInputElement>) => handleForm('remember', e.target.checked)} />
          <FormLinks>
            <Link passHref href='/auth/forgot'>
              forgot?
            </Link>
          </FormLinks>
        </FormOption>
        <Button title='login' />
      </FormContainer>

      <FormOption style={{ justifyContent: 'center', alignItems: 'center', gap: 3 }}>
        <FormSubHeading>not a member? </FormSubHeading>
        <FormLinks>
          <Link passHref href='/auth/join'>
            create an account
          </Link>
        </FormLinks>
      </FormOption>
    </FormField>
  )
}

type State = {
  email: string
  password: string
  remember: boolean
}

export default Form
