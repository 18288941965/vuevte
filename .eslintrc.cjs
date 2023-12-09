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
    env: {
        "es6": true,
        "node": true
    },
    rules: {
        // 字符串用单引号
        "quotes": ["error", "single"],
        // 禁用debugger | 开发环境虽然会警告，不过依旧可以使用，只是为了打包报错
        'no-debugger': 'error',
        // 声明的变量必须被使用
        'no-unused-vars': [
            'error',
            { varsIgnorePattern: '.*', args: 'none' }
        ],
        // 结尾不可以使用分号：根据个人喜好修改规则，没有一个统一的标准
        semi: ["error", "never"],
        'no-restricted-globals': 'off',
        'no-restricted-syntax': 'off'
    },
}