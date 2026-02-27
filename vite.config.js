import path from "path" // <--- Add this line
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  publicDir: 'public'
  ,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: [
      "tailwindcss",
      "lightningcss",
      "@tailwindcss/oxide-win32-x64-msvc"
    ],
  },
})