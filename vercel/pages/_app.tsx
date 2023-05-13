import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { palette } from '@/config/stitches.config'
import { DesignSystem } from '@/utils/@design'
import AuthLayout from '@/layout/Auth.layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={palette}>
      <DesignSystem />
      <AuthLayout>
        <Component {...pageProps} />
      </AuthLayout>
    </ThemeProvider>
  )
}
