import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";
import postcss_import from "postcss-import";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  let tailwindcss_config = './tailwind.config.cjs'
  switch (mode) {
    case 'production':
      tailwindcss_config = './packages/tailwind.config.cjs'
      break;
    case 'development':
      tailwindcss_config = './tailwind.config.cjs'
      break;
    default:
      break;
  }
  return ({
  build: {
    minify: false,
    cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: path.resolve(__dirname, "./packages/index.ts"),
      name: "jiliui",
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "packages"),
      "components": path.resolve(__dirname, "packages/components"),
      "~~": path.resolve(__dirname, "examples"),
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
  },
  plugins: [
    vue(),
    dts({
      tsConfigFilePath: "./tsconfig.json",
      exclude: ["./examples"],
    }),
    dts({
      outputDir: "types",
      tsConfigFilePath: "./tsconfig.json",
      exclude: ["./examples"],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postcss_import,
        tailwindcss(tailwindcss_config),
        autoprefixer,
      ],
    },
  },
})});
