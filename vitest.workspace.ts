import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  './packages/ui/vitest.config.ts',
  './packages/hooks/vitest.config.ts',
  './packages/utils/vitest.config.ts',
  './configs/tailwind-config/vitest.config.ts',
])
