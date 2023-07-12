import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  build: {
    target: 'esnext',
    rollupOptions: {
      //external: ['proxy-deep', 'ethers', 'ethers/lib/utils', '@latticexyz/utils']
    }
  },
})
