// // import { defineConfig } from 'vite'
// // import react from '@vitejs/plugin-react-swc'

// // // https://vitejs.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// // })
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [
//       { find: '@', replacement: path.resolve(__dirname, './src') }
//     ],
//   },
// })


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
//   },
//   server: {
//     host: true, // crucial for Render's 0.0.0.0 scanning
//     port: 5173, // optional; you can use Render's $PORT env variable too
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/', // 👈 THIS LINE IS CRUCIAL
  plugins: [react()],
  // resolve: {
  //   alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  // },
  server: {
    host: true, // allow external access
    port: 5173, // optional
  },
})
