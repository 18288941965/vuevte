module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: 'module'
    },
    extends: [
        'plugin:vue/base',
        'plugin:vue/vue3-recommended'
    ],

    rules: {
        "quotes": ["error", "single"],
        'no-debugger': 'error',
        'no-unused-vars': [
            'error',
            { varsIgnorePattern: '.*', args: 'none' }
        ],
    },
}