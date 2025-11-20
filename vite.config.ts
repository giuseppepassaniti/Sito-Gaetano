import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    base: './', // IMPORTANTE: Questo assicura che il sito funzioni anche in sottocartelle su GitHub
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  };
});