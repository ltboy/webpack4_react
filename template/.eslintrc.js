module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    commonjs: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  // 插件
  plugins: ['react'],
  // 配置自己的规则
  rules: {
    'generator-star-spacing': 'off',
    'no-console': 'off',
    'space-before-function-paren': 'off'
  }
}
