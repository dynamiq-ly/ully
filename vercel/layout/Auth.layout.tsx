/* eslint-disable @next/next/no-img-element */
import type { FC, ReactElement } from 'react'

import Link from 'next/link'
import Logo from '@/components/logo/Logo'

import { useRouter } from 'next/router'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { StyledAuth, StyledAuthForm, StyledAuthBanner, StyledAuthFormBody, StyledAuthResetLink, StyledAuthFooter, StyledAuthBackButton } from '@/styles/auth.module'

type AuthLayoutProps = {
  children: ReactElement
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  const { pathname, push } = useRouter()

  console.log(pathname)

  return (
    <StyledAuth>
      <StyledAuthForm>
        <div>
          <StyledAuthBackButton
            onClick={() => {
              switch (pathname) {
                case '/auth':
                  return push('/')
                case '/auth/send-email':
                  return push('/auth')
              }
            }}>
            <MdOutlineKeyboardBackspace />
          </StyledAuthBackButton>

          <Logo />
        </div>
        <StyledAuthFormBody>{children}</StyledAuthFormBody>
        <StyledAuthFooter>
          <StyledAuthResetLink>
            By clicking “Sign In” above, you acknowledge that you have read and understood, and agree to Craft’s{' '}
            <Link href={'/auth'} passHref>
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link href={'/auth'} passHref>
              Privacy Policy
            </Link>
            .
          </StyledAuthResetLink>
        </StyledAuthFooter>
      </StyledAuthForm>
      <StyledAuthBanner>
        <img src='https://docs.craft.do/static/media/craft-apps.366c43e3.png' alt={'banner image login form'} />
      </StyledAuthBanner>
    </StyledAuth>
  )
}

export default AuthLayout
