import type { AppProps } from 'next/app'

import { theme } from '@/config/stitches.config'
import { ThemeProvider } from 'styled-components'
import { DesignTheme } from '@/styles/@globals'

import MainLayout from '@/layout/Main.layout'
import AuthLayout from '@/layout/Auth.layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <DesignTheme />
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    </ThemeProvider>
  )
}
