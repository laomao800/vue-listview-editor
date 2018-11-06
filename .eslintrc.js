module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', '@vue/standard', '@vue/typescript'],
  rules: {
    // https://github.com/prettier/prettier/issues/3847
    'space-before-function-paren': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console':
      process.env.NODE_ENV === 'production'
        ? ['error', { allow: ['warn', 'error'] }]
        : ['warn', { allow: ['warn', 'error'] }],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/multiline-html-element-content-newline': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    // 'vue/script-indent': ['error', 2, { baseIndent: 0 }],
    'vue/no-unused-components': 0,
    'space-infix-ops': 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ],
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}