import Head from 'next/head'
import Link from 'next/link'
import { api } from '~/utils/api'

export default function Home() {
  const { data } = api.example.hello.useQuery({
    title: 'Strawberry-Basil Kombucha',
  })

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

        <div className="flex flex-col gap-6 border border-black p-6 lg:p-8">
          <h1 className="max-w-lg text-3xl font-bold leading-snug">
            {data?.title}
          </h1>

          <p>
            I almost always have a freshly-bottled batch of this stuff in the
            refrigerator. I tend to start brewing a new batch before I run out
            of inventory so that I have a continual stock.
          </p>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Ingredients</h2>
            <ul className="ml-8 flex list-disc flex-col gap-1.5">
              <li>
                <strong>1 2/3 gallons</strong> homemade kombucha*
              </li>
              <li>
                <strong>2 heaping cups</strong> ripe strawberries, chopped
              </li>
              <li>
                <strong>1/2 cup</strong> sugar
              </li>
              <li>
                <strong>1/2 cup</strong> water
              </li>
              <li>
                <strong>2 ounces (1 cup)</strong> fresh basil, chopped
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Instructions</h2>
            <ol className="ml-8 flex list-decimal flex-col gap-3">
              <li>
                Brew a batch of homemade kombucha. When it's ready to be bottled
                for secondary fermentation (after 7 to 10 days of brewing),
                follow instructions below.
              </li>
              <li>
                Add the strawberries, sugar, water and basil to a saucepan and
                bring to a full boil.
              </li>
              <li>
                Reduce heat and simmer for 10 minutes. Remove from heat, mash
                the strawberries with a fork and allow mixture to cool to room
                temperature (to speed up this process, pour the mixture in a
                bowl and refrigerate).
              </li>
              <li>
                In a large glass pitcher, combine half of the strawberry-basil
                mixture (including the pulp) and half of the kombucha. Stir
                well.
              </li>
              <li>
                Pour the strawberry-basil kombucha into 16-ounce glass flip cap
                bottles ¾ of the way up. Distribute the strawberry and basil
                pulp between the bottles.
              </li>
              <li>
                Repeat for the remaining half of the kombucha and
                strawberry-basil mixture.
              </li>
              <li>
                Seal flip cap bottles and leave in a warm, dark place for 2 to 4
                days for secondary fermentation. Refrigerate all of the bottles
                to chill before drinking (refrigeration also slows the
                fermentation).
              </li>
              <li>
                When ready to drink, point the bottle away from your face and
                carefully open, as gasses will have built and the kombucha will
                be fizzy.
              </li>
              <li>
                Using a small fine strainer, strain the kombucha into a glass
                and discard the pulp.
              </li>
              <li>A kombucha a day keeps the doctor away!</li>
            </ol>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Notes</h2>
            <p>
              *Brew a 2-gallon batch of kombucha and save some of the liquid
              (about 1/3 gallon) with your SCOBY for starting your next batch.
              In order to keep this recipe raw, skip the heating process.
              Instead, blend 2 cups of water with 2 cups of strawberries, then
              mix together with chopped basil, sugar, and kombucha prior to
              bottling.
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
