import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Add Your Github Repository Name Here
  base: "/CineVista/",
  plugins: [react()],
});
