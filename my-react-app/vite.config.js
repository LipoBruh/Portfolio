import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',  // Set the root directory
  build: {
    outDir: '../docs',  // Ensure the output directory is 'build'
  }
});
