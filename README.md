# Creating Stories With StoryBook

### 1 create React App with ** npx create-react-app **

### 2 install storybook in the app with ** npx sb init **

### 3 Create Stories with ** .stories.js ** extension in the app under src.

### 4 run storybook with ** npm storybook **

### 5 view your stories in browser

# Deployment

### 6 To Deploy in Npmjs, first signup on npms.com and remember your username and Password.

### 7 Delete public folder, app.js , and empty index.js file.

### 8 Export all your stories components from index.js

### 9 To publish the library we need to create an index.js file under dist folder.

### 10 To do this we need rollup configration

### 11 Install following rollup packages

npm i rollup-plugin-babel
@rollup/plugin-node-resolve
rollup-plugin-peer-deps-external
rollup-plugin-postcss
@rollup/plugin-commonjs
rollup-plugin-terser --save-dev

### 12 Create rollup.config.js on root level of the app and write this

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

### 13 Add the script in package.json to run rollup config
"build-lib": "rollup -c",

### 14 Add correct file location in package.json main
"main": "dist/index.js",

### 15 After running the config. you will saw your index.js file under dist folder. ,

### 16 Run ** npm login ** in cmd

### 17 Run ** npm publish **

### 18 For Guidance
https://www.youtube.com/watch?v=hf6Z8OZanec
