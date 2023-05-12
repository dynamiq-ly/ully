import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/config/stitches.config'
import { DesignSystem } from '@/utils/@global'
import AuthLayout from '@/layout/Auth.layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DesignSystem />
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    </ThemeProvider>
  )
}
