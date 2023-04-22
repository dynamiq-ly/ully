import type { AppProps } from 'next/app'

import { theme } from '@/config/stitches.config'
import { ThemeProvider } from 'styled-components'
import MainLayout from '@/layout/Main.layout'
import { DesignTheme } from '@/styles/@globals'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <DesignTheme />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}
