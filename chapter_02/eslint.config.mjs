import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  prettierConfig,
  {
    files: ["**/*.{js,mjs,cjs}"],
    rules: {
      "no-console": [1, { allow: ["warn", "error"] }],
      "object-shorthand": [2, "always", { avoidQuotes: true }],
    },
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
]);
