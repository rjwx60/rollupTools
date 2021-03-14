import typescript from "rollup-plugin-typescript";

export default {
  input: "./src/index.ts",
  output: [
    { file: `dist/rxTool-es.js`, format: "es" },
    { file: `dist/rxTool-cjs.js`, format: "cjs" },
  ],
  plugins: [typescript()],
};

