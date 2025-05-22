import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  root: '.',
  server: {
    port: 4200,
    host: 'localhost'
  },
  plugins: [react(), tsconfigPaths({}),svgr({ include: '**/*.svg?react' })],
})
