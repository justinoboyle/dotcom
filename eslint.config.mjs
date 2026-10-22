import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import oxlint from "eslint-plugin-oxlint";

// oxlint runs first (`npm run lint` = `oxfmt --check && oxlint && eslint .`).
// ESLint remains for Next-specific rules whose oxlint parity is partial;
// eslint-plugin-oxlint disables the ESLint rules oxlint already covers.
const eslintConfig = defineConfig([...nextVitals, ...oxlint.configs["flat/recommended"]]);

export default eslintConfig;
