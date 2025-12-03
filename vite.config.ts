import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Safely stringify the API Key
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // Stub process.env to prevent "process is not defined" crashes in 3rd party libs
      'process.env': {} 
    }
  }
})