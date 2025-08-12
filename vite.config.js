import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/robofriends-redux/',
  plugins: [react()],
  server: {
    port: 3030,
  },
});
