import type { AppProps } from 'next/app'

import { useRouter } from 'next/router'
import { theme } from '@/config/stitches.config'
import { ThemeProvider } from 'styled-components'
import { DesignTheme } from '@/styles/@globals'

import MainLayout from '@/layout/Main.layout'
import AuthLayout from '@/layout/Auth.layout'
import { FC, ReactElement } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()

  const Layout: FC<{ children: ReactElement }> = ({ children }) => {
    if (pathname.includes('/auth')) return <AuthLayout>{children}</AuthLayout>
    return <MainLayout>{children}</MainLayout>
  }

  return (
    <ThemeProvider theme={{ ...theme }}>
      <DesignTheme />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
