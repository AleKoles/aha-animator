import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: './scripts/main.js', 
    },
  },
});