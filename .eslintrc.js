module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "react-hooks"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        printWidth: 80,
        bracketSpacing: true,
        tabWidth: 2,
        semi: true,
        bracketSameLine: false,
        arrowParens: "avoid",
      },
    ],
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
      },
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    quotes: ["error", "double"],
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/explicit-function-return-type": "off",
    "object-curly-newline": "off",
    "line-break-style": "off",
    "arrow-parens": [0, "always"],
    "no-promise-executor-return": 0,
    "implicit-arrow-linebreak": 0,
    "no-unused-vars": 0,
    "comma-dangle": 0,
    "react/button-has-type": 0,
  },
  settings: {
    "import/resolver": {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
