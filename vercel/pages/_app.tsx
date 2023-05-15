import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'

import { ThemeProvider } from 'styled-components'

import { palette } from '@/config/stitches.config'
import { DesignSystem } from '@/utils/@design'

import AuthLayout from '@/layout/Auth.layout'
import ConsoleLayout from '@/layout/Console.layout'

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  const getLayout = () => {
    if (pathname.startsWith('/auth')) {
      return (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      )
    }
    if (pathname.startsWith('/console')) {
      return (
        <ConsoleLayout>
          <Component {...pageProps} />
        </ConsoleLayout>
      )
    }
    return <Component {...pageProps} />
  }

  return (
    <ThemeProvider theme={palette}>
      <DesignSystem />
      {getLayout()}
    </ThemeProvider>
  )
}
