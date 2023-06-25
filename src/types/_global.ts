import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type InferSSP<T extends (args: any) => any> = NextPage<
    InferGetServerSidePropsType<T>
  >

  type SSPC = GetServerSidePropsContext
}
