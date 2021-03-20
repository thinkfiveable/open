module.exports = {
    extends: ["airbnb-typescript", "plugin:prettier/recommended"],
    env: {
        browser: true,
        node: true,
        es2020: true
    },
    parserOptions: {
        project: "./tsconfig.eslint.json"
    },
    rules: {
        "react/jsx-filename-extension": [
            1,
            { extensions: [".js", ".jsx", ".ts", ".tsx"] }
        ],
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "react/react-in-jsx-scope": "off",
        "no-console": "off",
        "react/prop-types": "off",
        "simple-import-sort/imports": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                components: ["Link"],
                specialLink: ["hrefLeft", "hrefRight"],
                aspects: ["invalidHref", "preferButton"]
            }
        ],
        "jsx-a11y/alt-text": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "react/no-unescaped-entities": "warn"
    },

    plugins: ["simple-import-sort"]
}
