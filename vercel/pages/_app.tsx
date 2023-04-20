import type { AppProps } from 'next/app'

// styles importing
import { globals } from '@/config/stitches.config'
globals()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
