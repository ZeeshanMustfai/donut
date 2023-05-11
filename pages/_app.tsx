import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { lightTheme } from '@/theme'
import { useSSR } from '@nextui-org/react'

export default function App({ Component, pageProps }: AppProps) {
	const color = typeof window !== 'undefined' ? 'red' : 'blue'
	const { isBrowser } = useSSR()
	return (
		isBrowser && (
			<NextUIProvider theme={lightTheme}>
				{color ? <Component {...pageProps} /> : 'loading...'}
			</NextUIProvider>
		)
	)
}
