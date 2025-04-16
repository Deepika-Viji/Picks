// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      // { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      // { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      // { find: '@stores', replacement: path.resolve(__dirname, './src/store') },
      // { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      // { find: '@constants', replacement: path.resolve(__dirname, './src/constants') },
      // { find: '@api', replacement: path.resolve(__dirname, './src/api') },
    ],
  },
})