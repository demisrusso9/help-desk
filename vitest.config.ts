import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          globals: true,
          include: ['tests/unit/**/*.spec.ts', 'src/**/*.spec.ts'],
        },
        extends: true,
      },
      {
        test: {
          name: 'e2e',
          globals: true,
          // setupFiles: ['./tests/e2e/helpers/setup.ts'],
          include: ['tests/e2e/**/*.spec.ts'],
          sequence: { concurrent: false },
          testTimeout: 10000,
        },
        extends: true,
      },
    ],
  },
});
