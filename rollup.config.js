const babel = require("rollup-plugin-babel");
const resolve = require("@rollup/plugin-node-resolve");
const external = require("rollup-plugin-peer-deps-external");
const postcss = require("rollup-plugin-postcss");
const commonjs = require("@rollup/plugin-commonjs");
const { terser } = require("rollup-plugin-terser");
module.exports = [
  {
    input: "./src/index.js",
    output: {
      file: "dist/index.js",
      format: "umd",
      name: "myBundle",
    },
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
];
