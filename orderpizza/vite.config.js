import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// trick to proxy api requests to the backend server during development
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});