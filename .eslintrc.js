module.exports = {
    extends: ["airbnb-typescript", 'plugin:prettier/recommended'],
    env: {
      browser: true,
      node: true,
      es2020: true,
    },
    parserOptions: {
      project: "./tsconfig.eslint.json",
    },
    rules: {
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'simple-import-sort/imports': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
    },
    plugins: ['simple-import-sort']
  };
  