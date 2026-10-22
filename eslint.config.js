// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const reactNative = require("eslint-plugin-react-native");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*", ".expo/*", "node_modules/*"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: { "react-native": reactNative },
    rules: {
      // Imports
      "import/no-cycle": "warn",
      "no-restricted-imports": [
        "error",
        { patterns: [{ group: ["**/oldVersion/*"], message: "Pasta obsoleta." }] },
      ],
      "@typescript-eslint/consistent-type-imports": ["warn", { fixStyle: "inline-type-imports" }],

      // Qualidade geral
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "warn",
      curly: ["warn", "all"],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",

      // React
      "react/self-closing-comp": "warn",
      "react/jsx-no-useless-fragment": "warn",
      "react/no-array-index-key": "warn",
      "react/jsx-boolean-value": "warn",

      // React Native
      "react-native/no-unused-styles": "warn",
      "react-native/no-inline-styles": "warn",
      "react-native/no-single-element-style-arrays": "warn",
    },
  },
]);
