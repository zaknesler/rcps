import type { t } from './trpc'

export const initProcedures = (root: t['procedure']) => {
  return {
    public: root,
  }
}
