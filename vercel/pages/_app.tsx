import type { AppProps } from 'next/app'

import { theme } from '@/config/stitche.config'
import { ThemeProvider } from 'styled-components'
import MainLayout from '@/layout/Main.layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  )
}
