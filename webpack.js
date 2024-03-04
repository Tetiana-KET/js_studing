/*
Установить все зависимости выполнив npm i - когда в другом месте скачала с гита. Не забудь перейти в папку с проэктом.
Модули и package-lock можно удалять, ОСТАВИТЬ package.json. Если переносим проэкт. Потом просто запустить npm i (install),
нода подкачает все необходимые зависимости, для указанных в package.json модулях


Настройка Webpack - https://habr.com/ru/amp/publications/701724/
Webpack: руководство для начинающих - https://habr.com/ru/articles/514838/

Сначала создаем каталог проэкта
npm i -g webpack - устанавливает вебпак
в корне проэкта папка src - 
В каталоге src создадим файл index.js
В каталоге src создадим файл index.html и подключить в него файл со сборкой:<script src="./dist/bundle.js"></script>

инициализируем Git
в файл .gitignore и запишем следующее: node_modules - чтоб игнорировать имена и шаблоны для файлов и каталогов, которые не нужны в репозитории. 

1.Теперь, инициализируем npm, для этого в терминале введем следующую команду:

npm init -y - инициализирует проэкт, создает папку node_modules и файл package-lock.json. 

2. npm install webpack webpack-cli --save-dev //добавить Webpack в список зависимостей приложения

3. самостоятельно создать конфигурационный файл webpack.config.js (в корне проэкта)

  //path — встроенный в Node.js модуль

  const path = require('path')

  module.exports = {// экспортируем объект конфига
    mode: 'development', // or production -  по умолчанию, если не указываем другой при сборке
    // Указываем путь до входной точки:
    entry: './src/index.js',
    // Описываем, куда следует поместить результат работы:
    output: {
      // Путь до директории (важно использовать path.resolve):
      path: path.resolve(__dirname, 'dist'),
      // Имя файла со сборкой:
      filename: 'bundle.js'
    }
  }


4.Добавить скрипт для сборки в ФАЙЛ package.json и вызвать его:

  {
    "scripts": {
      "build": "webpack"
    }
  }

  npm run build (npx) - запускаем сборку, В результате, в корне проекта должен появиться каталог dist, в который скомпилируется файл bundle.js

4.В корне проекта нужно создать папку src, а в ней файл index.html и подключить в него файл со сборкой:

  <!DOCTYPE html>
  <html>
    <head>
      ...
    </head>
    <body>
      ...
      <script src="./dist/bundle.js"></script>
    </body>
  </html>

5. ОТСЛЕЖИВАНИЕ ИЗМЕНЕНИЙ В ПРОЕКТЕ

  режимом инкрементальной сборки, когда Webpack отслеживает изменения файлов с исходным кодом
  и автоматически собирает те части, которые изменились.
  Добавим новую команду в package.json:

  {
    "scripts": {// запустить npm run scriptName//(build)
      "dev": "webpack --mode development"//собирать в режиме разработки
      "build": "webpack --production",
      "watch": "webpack --mode development --watch",
      "serve": "webpack serve"
    }
  }
  Теперь достаточно открыть файл index.html в браузере и обновлять страницу после сохранения файлов с исходным кодом.
  Для большего удобства можно воспользоваться пакетом webpack-dev-server.

установить DEV SERVER - npm i -D webpack-dev-server
запустить сервер - npx webpack serve 
"Ctrl + c", остановить webpack-dev-сервер
Нужно дополнить конфиг вебпака и добавить такую запись в конфигурационный файл:

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },

Для Webpack написано огромное число лоадеров — для работы со стилями, с разными языками, для обработки изображений и для многого другого. Вот несколько, которые можно встретить почти в любом проекте:

  style-loader — импортирует CSS-файлы и внедряет стили в DOM.
  css-loader — позволяет работать с @import и url() внутри CSS.
  babel-loader — позволяет писать код на современном JS, но исполнять его даже в старых браузерах.

LOADER Чтобы добавить новый лоадер, нужно расширить файл webpack.config.js:
ПОДКЛЮЧИТЬ CSS =>  в index.JS => import '.styles/styles.css'  <=  абсолютный путь к файлу со стилями

  module.exports = {
    // В этом массиве будут перечислены все применяемые лоадеры:

    module: {
      rules: [
        {
          // Это правило будет применяться ко всем файлам,
          // имя которых подойдет под регулярное выражение:
          test: /\.css$/,
          // Список лоадеров, которые применятся к файлу:
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              // Лоадеру можно передать параметры:
              options: { modules: true }
            }
          ]
        }
      ]
    }

  }

установить лоудеры npm i -D style-loader css-loader

PLUGIN Чтобы добавить новый плагин в сборку, нужно расширить файл webpack.config.js:

  Webpack предоставляет несколько плагинов в основном пакете:
  const { ProgressPlugin } = require('webpack')

  module.exports = {
    plugins: [
      // При сборке этот плагин будет отображать прогресс в консоли:
      new ProgressPlugin()
    ]
  }

настроить вебпак, чтобы он самостоятельно генерировал index.html на основе настроек или шаблона 
и добавлял в него теги для подключения итогового js бандла и стилей
а также удалал файлы прошлых сборок

  установить пакет с плагином в проект:

  npm install --save-dev html-webpack-plugin - автосборка html
  npm install -D clean-webpack-plugin - очищать прошлые сборки

  В webpack.config.js ПОДКЛЮЧАЕМ ПЛАГИН
  const HtmlWebpackPlugin = require('html-webpack-plugin');

  module.exports = {
    new HtmlWebpackPlugin({
      title: 'Nonogram',
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'template.html'),// будет брать шаблонный index.html и в него подключать все скрипты и положет его в папку dist    
    }),

  ],
    
  }

  При сборке плагин сгенерирует пустой index.html в папку с собранным проектом 
  и добавит туда ссылки на финальные JS- и CSS-файлы

npm install --save normalize.css


*/

