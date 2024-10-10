import globals from "globals";

export default {
  extends: [
    "plugin:prettier/recommended" // Adiciona a configuração do Prettier
  ],
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
      languageOptions: { globals: globals.browser },
      rules: {
        'max-len': ['error', { 
          code: 80,
          tabWidth: 2,
          ignoreUrls: true,        // Ignora URLs (útil para strings de links longos)
        }],
        'linebreak-style': ['error', 'unix'], // Força o uso de LF para quebras de linha
        'indent': ['error', 2],
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};