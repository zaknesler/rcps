import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import Link from 'next/link'
import { api } from '~/utils/api'

export default function Home() {
  const { data } = api.recipes.list.useQuery({ id: 1 })

  return (
    <>
      <Head>
        <title>rcps</title>
        <meta name="description" content="recipes" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-6 font-mono md:gap-12 md:p-12">
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="bg-black px-2 py-1 text-white hover:bg-red-600"
          >
            rcps
          </Link>
          <Link
            href="#"
            className="font-semibold underline hover:text-red-600"
            title="breakfast"
          >
            brkfst
          </Link>
          <Link
            href="#"
            className="font-semibold underline hover:text-red-600"
            title="lunch"
          >
            lnch
          </Link>
          <Link
            href="#"
            className="font-semibold underline hover:text-red-600"
            title="dinner"
          >
            dnnr
          </Link>
          <Link
            href="#"
            className="font-semibold underline hover:text-red-600"
            title="snacks"
          >
            snks
          </Link>
          <Link
            href="#"
            className="font-semibold underline hover:text-red-600"
            title="drinks"
          >
            drnks
          </Link>
          <Link
            href="#"
            className="font-semibold underline hover:text-red-600"
            title="vegan"
          >
            vgn
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 font-semibold underline hover:text-red-600 sm:ml-auto sm:text-right"
          >
            <MagnifyingGlassIcon className="h-4 w-4" />
            srch
          </Link>
        </div>

        {data && (
          <div className="-mx-3 flex flex-col gap-6 border border-black p-3 md:-mx-8 md:p-8">
            <h1 className="max-w-lg text-2xl font-bold leading-snug md:text-3xl">
              {data.title}
            </h1>

            <p>
              I almost always have a freshly-bottled batch of this stuff in the
              refrigerator. I tend to start brewing a new batch before I run out
              of inventory so that I have a continual stock.
            </p>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold md:text-xl">Ingredients</h2>
              <ul className="ml-8 flex list-disc flex-col gap-1.5">
                {data.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <strong>{ingredient.amount}</strong> {ingredient.name}
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold md:text-xl">Instructions</h2>
              <ol className="ml-8 flex list-decimal flex-col gap-3">
                {data.steps.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold md:text-xl">Notes</h2>
              {data.notes.map((note, index) => (
                <p key={index}>{note}</p>
              ))}
            </section>
          </div>
        )}
      </main>
    </>
  )
}
