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
        // importのpath指定で相対パスの使用を許可する。
        "import/no-unresolved": "off",
        // console系の警告を外す。
        // "no-console": "off"
    }
}