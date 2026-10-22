import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

// Matches the latest create-next-app template's eslint.config.mjs, minus the
// `eslint-config-next/typescript` preset (not yet exported by 16.4.2).
const eslintConfig = defineConfig([...nextVitals]);

export default eslintConfig;
