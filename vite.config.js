import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "assets", // Specify the folder where Vite should output files
    rollupOptions: {
      input: "./scripts/main.js",
      output: {
        entryFileNames: "main.js", // Specify a fixed name for the main JS file
      },
    },
  },
});
