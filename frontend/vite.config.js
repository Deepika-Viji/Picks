import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
    strictPort: true,
    allowedHosts: ['picksfrontend.onrender.com']
  },
  preview: {
    port: process.env.PORT || 5173,
    strictPort: true
  }
});
