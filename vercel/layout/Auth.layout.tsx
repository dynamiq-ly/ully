import type { FC } from 'react'

import Logo from '@/components/Logo'

import { AuthLayoutWrapper, AuthLayoutHeader, AuthLayoutContainer, AuthLayoutFooter } from '@/styles/layout.style'

type Props = {
  children: React.ReactNode
}

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <AuthLayoutWrapper>
      <AuthLayoutHeader>
        <Logo />
      </AuthLayoutHeader>
      <AuthLayoutContainer>{children}</AuthLayoutContainer>
      <AuthLayoutFooter>
        <p>© {new Date().getFullYear()} ully</p>
        <p>terms of use.</p>
      </AuthLayoutFooter>
    </AuthLayoutWrapper>
  )
}

export default AuthLayout
