import { AuthContextProvider } from '@/context/auth'
import { GlobalStyle } from '@/styles/globals'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}
