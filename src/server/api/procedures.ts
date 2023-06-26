import type { t } from './trpc'

export const initProcedures = (root: t['procedure']) => ({
  public: root,
  auth: root.use(({ next, ctx }) => {
    const key = ctx.req.query.key as string | undefined

    if (key !== 'placeholder_replace_me') throw new Error('Invalid API key')

    return next({ ctx })
  }),
})
