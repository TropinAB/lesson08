import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from 'eslint-plugin-jest';

export default defineConfig([
  { 
    files: [
      "./HomeWork**/**/*.{js,mjs,cjs}"
    ], 
    plugins: { js }, 
    rules: {
      ...js.configs.recommended.rules,
      "semi": ["error", "always"]
    },
    extends: ["js/recommended"], 
    languageOptions: { globals: {...globals.browser, ...globals.node} } 
  },
  {
    files: ["HomeWork**/**/*.test.js"],
    ...jest.configs['flat/recommended'],
  }
]);
