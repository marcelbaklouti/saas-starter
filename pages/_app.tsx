import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

const lightTheme = createTheme({
  type: 'light',
  theme: {}
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {}
})

export default function App({
  Component,
  pageProps: { 
    session, 
    ...pageProps 
  } 
}: AppProps) {
  return (
    <NextThemesProvider 
    defaultTheme="system"
    attribute="class"
    value={{ light: lightTheme.className, dark: darkTheme.className }}

    >
      <NextUIProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </NextUIProvider>
    </NextThemesProvider>
  )
}
