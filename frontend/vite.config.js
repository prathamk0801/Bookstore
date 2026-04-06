// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/_/backend': {
        target: 'http://localhost:4000', // aapka local backend
        changeOrigin: true,
        rewrite: (path) => path.replace('/_/backend', '')
      }
    }
  }
});