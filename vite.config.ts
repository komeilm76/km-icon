import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/index.ts",
      name: "KmIcon",
      fileName: "index",
      cssFileName: "style",
      // formats: ["cjs", "es", "umd"],
    },
  },
});
