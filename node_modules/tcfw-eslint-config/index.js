const path = require("path");
const fs = require("fs");

// Following code allows to override some rules in .eslint.local.json file
let localConfig = { rules: {} };
const localConfigPath = path.resolve(process.cwd(), ".eslint.local.json");
try {
  const contents = fs.readFileSync(localConfigPath, { encoding: "utf-8" });
  localConfig = JSON.parse(contents);
} catch (e) {}

module.exports = {
  plugins: ["simple-import-sort", "unused-imports"],
  extends: [
    "alloy",
    "alloy/typescript",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  env: {
    node: true,
  },
  rules: {
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-floating-promises": "warn",
    complexity: "off",
    "max-params": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "off",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    // make sure this is disabled, since tsc already checks this
    // https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting/#eslint-plugin-import
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "off",
    ...localConfig.rules,
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
};
