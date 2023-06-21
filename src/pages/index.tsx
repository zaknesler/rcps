import Head from 'next/head'
import Link from 'next/link'
import { api } from '~/utils/api'

export default function Home() {
  const { data } = api.recipes.list.useQuery({ id: 1 })

  return (
    <>
      <Head>
        <title>rcps.</title>
        <meta name="description" content="recipes" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 p-6 font-mono lg:gap-12 lg:p-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="hover:text-red-500">
              rcps.
            </Link>
            <Link
              href="#"
              className="font-semibold underline hover:text-red-500"
            >
              All
            </Link>
            <Link
              href="#"
              className="font-semibold underline hover:text-red-500"
            >
              Breakfast
            </Link>
            <Link
              href="#"
              className="font-semibold underline hover:text-red-500"
            >
              Lunch
            </Link>
            <Link
              href="#"
              className="font-semibold underline hover:text-red-500"
            >
              Dinner
            </Link>
            <Link
              href="#"
              className="font-semibold underline hover:text-red-500"
            >
              Snacks
            </Link>
            <Link
              href="#"
              className="font-semibold underline hover:text-red-500"
            >
              Vegan
            </Link>
          </div>

          <Link href="#" className="font-semibold underline hover:text-red-500">
            Search
          </Link>
        </div>

        {data && (
          <div className="flex flex-col gap-6 border border-black p-6 lg:p-8">
            <h1 className="max-w-lg text-3xl font-bold leading-snug">
              {data.title}
            </h1>

            <p>
              I almost always have a freshly-bottled batch of this stuff in the
              refrigerator. I tend to start brewing a new batch before I run out
              of inventory so that I have a continual stock.
            </p>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold">Ingredients</h2>
              <ul className="ml-8 flex list-disc flex-col gap-1.5">
                {data.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <strong>{ingredient.amount}</strong> {ingredient.name}
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold">Instructions</h2>
              <ol className="ml-8 flex list-decimal flex-col gap-3">
                {data.steps.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold">Notes</h2>
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
