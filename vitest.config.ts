import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    include: ['test/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['test/setup.ts'],
  },
  plugins: [react()],
});
