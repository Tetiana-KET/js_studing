/*https://www.youtube.com/watch?v=Yf1_uTwKVxA&list=PLNPYa2iDftMS63nrBzhb1QQDm0YVcSju-&index=8


Error: Failed to load parser 'babel-eslint' declared in '.eslintrc.js': => //npm install eslint@4.x babel-eslint@8 - g - 
npx eslint -h//help
npx eslint --fix file.js// исправить как можно больше проблем. Исправления вносятся в сами файлы, и выводятся только оставшиеся неисправленные проблемы.
npm run lint
npm run lint:fix

1. npm init -y - создат файл packege.json

2. npm install --save-dev eslint

3. npm install --save-dev eslint-config-airbnb eslint-config-prettier eslint-plugin-html eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier prettier

4. создать файл .eslintrc.js

module.exports = {
  'env': {
    'browser': true, // Разрешить запуск кода в браузере
    'commonjs': true,// Разрешить commonJS
    'es6': true, // Включает синтаксис ES6 автоматически
    'node': true
  },
  'extends': ['airbnb-base', 'prettier', 'eslint:recommended'],
  'parserOptions': {
    'ecmaVersion': 12
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'no-var': 'error',// Require let or const instead of var
    'prefer-const': 'error',// Require const declarations for variables that are never reassigned after declared
    'quotes': [
      'error',
      'single',
      { 'allowTemplateLiterals': true }
    ],
    'semi': [
      'error',
      'always'
    ],
    'space-infix-ops': [
      'error',
      { 'int32Hint': false }
    ],// Требовать пробелы вокруг инфиксных операторов =/+/-
    'key-spacing': [
      'error',
      { 'afterColon': true }
    ],
    'no-multi-spaces': 'error',// Disallow multiple spaces
    'space-in-parens': 'error',// Enforce consistent spacing inside parentheses
    'no-multiple-empty-lines': 'error',// Disallow multiple empty lines
  }
};

в package.json добавить команды

 "scripts": {
    "lint": "eslint ./src",//npm run lint проверить файлы
    "lint:fix": "eslint ./src --fix"// npm run lint:fix исправить файлы
  },

в .eslintignore добавить

node_modules
/.vscode
/.git

в .gitignore добавить

#node-modules
node_modules
*/