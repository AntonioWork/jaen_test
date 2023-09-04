#!/bin/bash

# Крок 1: Встановити Vite глобально
npm install -g create-vite

# Крок 2: Створити новий проект Vite з шаблоном React + TypeScript (замість 'jaen_test_task' вставте вашу назву проекту)
create-vite jaen_test_task --template react-ts

# Крок 3: Перейти в каталог проекту
cd jaen_test_task

# Крок 4: Встановити ESLint та плагіни Airbnb
npm install eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks --save-dev

# Крок 5: Створити файл конфігурації ESLint .eslintrc.js

cat <<EOL > .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    // Додайте ваші власні правила ESLint тут, якщо потрібно.
  },
};
EOL

# Крок 6: Встановити ESLint для TypeScript та інші залежності
npm install @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier --save-dev

# Крок 7: Встановити Tailwind CSS та інші залежності
npm install tailwindcss postcss autoprefixer --save-dev

# Крок 8: Створити конфігураційний файл для Tailwind CSS та PostCSS
npx tailwindcss init -p

# Крок 9: Додати кастомні кольори до tailwind.config.js

# Крок 10: Запустити проект Vite
npm run dev
