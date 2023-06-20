import { GlobalStyle } from '@/styles/globals'
import type { AppProps } from 'next/app'
import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />
    <Header />
    <Component {...pageProps} />
    </>
  )
}
