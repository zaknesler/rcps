import type { InferGetServerSidePropsType, NextPage } from 'next'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type InferSSR<T extends (args: any) => any> = NextPage<
    InferGetServerSidePropsType<T>
  >
}
