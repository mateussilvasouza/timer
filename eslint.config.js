// eslint.config.js
import { ESLint } from "eslint";

const eslint = new ESLint({
  overrideConfig: {
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    rules: {
      "max-len": [
        "error",
        {
          code: 80,
          tabWidth: 2,
          ignoreUrls: true,
        },
      ],
      "prettier/prettier": [
        "error",
        {
          printWidth: 80, // Certifique-se de que este valor corresponda ao de max-len
        },
      ],
      "linebreak-style": ["error", "unix"],
      indent: ["error", 2],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-non-null-assertion": "off", // Permite o uso do operador '!'
    },
  },
});

export default eslint;
