import { type AppType } from 'next/app'
import { IBM_Plex_Mono } from 'next/font/google'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Nav } from '~/components/nav'
import { api } from '~/utils/api'
import '~/styles/app.css'

const monoFont = IBM_Plex_Mono({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
})

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter()
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const handler = () => setNavOpen(false)
    router.events.on('routeChangeComplete', handler)
    return () => router.events.off('routeChangeComplete', handler)
  }, [router])

  return (
    <>
      <Head>
        <title>r.c.p.s</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="recipes" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <main
        className={`${monoFont.variable} mx-auto flex h-full w-full max-w-5xl flex-col`}
      >
        <div className="flex flex-1 flex-col gap-4 p-4 font-mono  md:gap-8 md:p-8">
          <Nav open={navOpen} onToggle={() => setNavOpen(!navOpen)} />
          {!navOpen && <Component {...pageProps} />}
        </div>
      </main>
    </>
  )
}

export default api.withTRPC(MyApp)
