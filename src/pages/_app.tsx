import { type AppType } from 'next/app'
import { IBM_Plex_Mono } from 'next/font/google'
import Head from 'next/head'
import { Nav } from '~/components/nav'
import { api } from '~/utils/api'
import '~/styles/app.css'

const monoFont = IBM_Plex_Mono({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>rcps</title>
        <meta name="description" content="recipes" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <main
        className={`${monoFont.variable} mx-auto flex w-full max-w-4xl flex-col gap-4 p-4 font-mono md:gap-8 md:p-8`}
      >
        <Nav />
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default api.withTRPC(MyApp)
