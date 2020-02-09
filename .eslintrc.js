module.exports = {
    "extends": [
        // "eslint:recommended",
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        // "plugin:@typescript-eslint/eslint-recommended",
    
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint"
    ],
    "plugins": ["@typescript-eslint"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "globals": {},
    "rules": {
        // exportを許可する(Typescriptではdefault exportは使わない方がいい)
        'import/prefer-default-export': 'off',
        // importのpath指定で相対パスの使用を許可する。
        "import/no-unresolved": "off",
        // console系の警告を外す。
        "no-console": "off",
        // 相対パスを使用する際に拡張子の指定を不要に
        "import/extensions": ["error", "never"]
    }
}