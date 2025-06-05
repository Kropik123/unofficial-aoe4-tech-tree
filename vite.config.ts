import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    https: true,
    host: 'localhost',
  },
  build: {
    minify: false,         // no minification for readability (needed according to twitch guidelines)
    sourcemap: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'primereact'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          primereact: 'PrimeReact'
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Put all node_modules code in a separate chunk (vendor.js)
            return 'vendor'
          }
        }
      }
    }
  },
  base: './',
})
