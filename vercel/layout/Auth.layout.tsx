import type { FC, ReactElement } from 'react'

import Logo from '@/shared/Logo'

import { AuthContainer, AuthFooter, AuthForm, AuthHeader } from '@/styles/auth.module'

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <AuthContainer>
      <AuthHeader>
        <Logo />
      </AuthHeader>

      <AuthForm>{children}</AuthForm>

      <AuthFooter>
        <p>© {new Date().getFullYear()}. ully</p>
      </AuthFooter>
    </AuthContainer>
  )
}

type AuthLayoutProps = {
  children: ReactElement
}

export default AuthLayout
