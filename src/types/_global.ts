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

  type ExcludesFalsy = <T>(
    value: T,
  ) => value is Exclude<T, false | null | undefined | '' | 0>

  type ObjectWithKeys<K extends object, V = unknown> = {
    [key in keyof K]: V
  }
}
