import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import scss from "rollup-plugin-scss";
import smartAsset from "rollup-plugin-smart-asset";

const smartAssetOpts = {
  url: 'copy'
};

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/pwr-theme.js",
      format: "iife",
      name: "PWRTheme",
      plugins: [terser()],
    },
    plugins: [
      smartAsset(smartAssetOpts),
      json(),
      resolve(),
      babel({ babelHelpers: "bundled" }),
    ],
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/pwr-theme.esm.js",
      format: "es",
      plugins: [terser()],
    },
    plugins: [
      smartAsset(smartAssetOpts),
      json(),
      resolve(),
      babel({ babelHelpers: "bundled" }),
    ],
  },
  {
    input: "src/pwr.scss",
    plugins: [
      scss({
        // include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
        output: "dist/pwr-theme.css",
        // outputStyle: "compressed",
        runtime: require("sass"),
      }),
    ],
  },
  {
    input: "src/wust.scss",
    plugins: [
      scss({
        // include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
        output: "dist/wust-theme.css",
        // outputStyle: "compressed",
        runtime: require("sass"),
      }),
    ],
  },
];
