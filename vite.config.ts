import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";
import postcss_import from "postcss-import";
import postcss_nested from "tailwindcss/nesting";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import fs from "fs/promises";
import jss_cli from "jss-cli";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let tailwindcss_config = "./tailwind.config.cjs";
  switch (mode) {
    case "production":
      tailwindcss_config = "./packages/tailwind.config.cjs";
      break;
    case "development":
      tailwindcss_config = "./tailwind.config.cjs";
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
      environment: "jsdom",
    },
    plugins: [
      vue(),
      (function Outputcss() {
        return {
          name: "vite:Outputcss",
          // apply: "build",
          async transform(code, id, opt) {
            const [filename, rawQuery] = id.split(`?`, 2);
            // console.log("transform", id);
            if (
              /\.vue$/.test(filename) && /\.postcss/.test(rawQuery) &&
              /jiliUI\/packages\/components/.test(filename)
            ) {
              // let _filename = filename.split("/").pop();
              // const output = path.resolve(__dirname, "./dist/style");
              const css_file = `${filename}.css`;
              const jcss_file = `${filename}.cjs`;
              // console.log("transform", jcss_file);
              await fs.writeFile(css_file, code);
              await fs.writeFile(
                jcss_file,
                `module.exports=${JSON.stringify(jss_cli.cssToJss({ code }))}`,
              );
              // console.log('ok')
            }
          },
        };
      })(),
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
          // tailwindcss("./packages/components/layout/tailwindcss.config.cjs"),
          postcss_nested,
          tailwindcss(tailwindcss_config),
          autoprefixer,
        ],
        // {
        //   'postcss-import': {},
        //   'tailwindcss/nesting': {},
        //   tailwindcss: tailwindcss_config,
        //   autoprefixer: {},
        // }
      },
    },
  });
});
