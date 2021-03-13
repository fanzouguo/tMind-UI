module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 规则配置写在这里
  rules: {
    // 要求或禁止 var 声明中的初始化(初值)
    'init-declarations': 1,
    // 不允许 catch 子句的参数与外层作用域中的变量同名
    'no-catch-shadow': 0,
    // 禁止删除变量
    'no-delete-var': 2,
    // 不允许标签与变量同名
    'no-label-var': 2,
    // 禁用特定的全局变量
    'no-restricted-globals': 0,
    // 禁止 var 声明 与外层作用域的变量同名
    'no-shadow': 0,
    // 禁止覆盖受限制的标识符
    'no-shadow-restricted-names': 2,
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 2,
    // 禁止将变量初始化为 undefined
    'no-undef-init': 2,
    // 禁止将 undefined 作为标识符
    'no-undefined': 1,
    // 禁止出现未使用过的变量
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'none'
    }],
    // 不允许在变量定义之前使用它们
    'no-use-before-define': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 语句强制分号结尾
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    'semi': [2, 'always'],
    // 不允许使用console命令
    'no-console': 'error',
    // 缩进字符数为4个
    'indent': 'off',
    // 'indent': ['error', 2],
    // indent: ['error', 2, {
    //   SwitchCase: 1
    // }],
    'comma-dangle': ['error', 'never'],
    // 引号类型
    'quotes': ['error', 'single'],
    'no-multiple-empty-lines': [2, {
      max: 99999,
      maxEOF: 0
    }],
    'quote-props': ['error', 'consistent-as-needed'],
    // 禁止不必要的分号
    'no-extra-semi': 2,
    // 禁止在return、throw、continue 和 break语句之后出现不可达代码
    'no-unreachable': 2,
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': 2,
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 2,
    // 要求构造函数首字母大写  （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
    'new-cap': [2, {
      newIsCap: true,
      capIsNew: false
    }],
    // 要求调用无参构造函数时有圆括号
    'new-parens': 2,
    // 要求使用 let 或 const 而不是 var
    'no-var': 0,
    'space-before-function-paren': 0,
    'no-tabs': 'off',
    'linebreak-style': ['off', 'windows'],
    '@typescript-eslint/no-var-requires': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
