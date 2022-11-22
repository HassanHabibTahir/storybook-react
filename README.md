# Creating Stories With StoryBook

### * create React App with ** npx create-react-app **

### * install storybook in the app with ** npx sb init **

### * Create Stories with ** .stories.js ** extension in the app under src.

### * run storybook with ** npm storybook **

### * view your stories in browser

# Deployment

### * To Deploy in Npmjs, first signup on npms.com and remember your username and Password.

### * Delete public folder, app.js , and empty index.js file.

### * Export all your stories components from index.js

### * To publish the library we need to create an index.js file under dist folder.

### * To do this we need rollup configration

### * Install following rollup packages

npm i rollup-plugin-babel
@rollup/plugin-node-resolve
rollup-plugin-peer-deps-external
rollup-plugin-postcss
@rollup/plugin-commonjs
rollup-plugin-terser --save-dev

### * Create rollup.config.js on root level of the app and write this

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
exclude: "node_modules/\*\*",
presets: ["@babel/preset-react"],
}),
external(),
resolve(),
commonjs(),
terser(),
],
},
];

### * Add the script in package.json to run rollup config
"build-lib": "rollup -c",

### * Add correct file location in package.json main
"main": "dist/index.js",

### * After running the config. you will saw your index.js file under dist folder. ,

### * Run ** npm login ** in cmd

### * Run ** npm publish **

### * For Guidance
https://www.youtube.com/watch?v=hf6Z8OZanec
