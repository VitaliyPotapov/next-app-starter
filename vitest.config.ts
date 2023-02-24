import path from 'node:path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  test: {
    include: ['test/specs/**'],
    environment: 'jsdom',
    setupFiles: ['test/setup.ts'],
    coverage: {
      all: true,
      include: ['src/**'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
});
