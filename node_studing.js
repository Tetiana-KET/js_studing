/**
 * ESlint
 * .eslintignore -
 * node_modules
 * /.vscode
 * /.git

  Error: Failed to load parser 'babel-eslint' declared in '.eslintrc.js': => //npm install eslint@4.x babel-eslint@8 - g - 
  npx eslint -h//help
  npx eslint --fix file.js// исправить как можно больше проблем. Исправления вносятся в сами файлы, и выводятся только оставшиеся неисправленные проблемы.
  npm run lint
  npm run lint:fix
 * 
  

 * 
  Код можно писать и выполнять прямо в терминале.
  Такой режим называется REPL 
  Чтобы в него перейти, выполните в терминале команду node
  .help; .exit
  node fileName.js - Откроем файл при помощи VS Code, в терминале. Команда открывает не сам файл, 
  а запускает выполнение кода написанного в файле.
  расширение файла можно не указывать, т.е достаточно написать node test //=> Hello, world!
  
  Неблокирующий I/O происходит асинхронно

  db.connect((error, connection) => {
    if (error) throw error;
    connection.query('SELECT * FROM users', users => {
      console.log(users);
    });
  });

  Для ввода и вывода информации (I/O - input/output) в Node.js существуют стандартные потоки ввода и вывода:
  process.stdin - поток ввода
  process.stdout - поток вывода
  process.stderr - поток ошибки как разновидность потока вывода

  start the project, create json - npm init -y
  install neccesary module - npm install --save
  Модули и package-lock можно удалять, ОСТАВИТЬ package.json. Если переносим проэкт. Потом просто запустить npm i (install),
  нода подкачает все необходимые зависимости, для указанных в package.json модулях

  Для ГИТ - в .gitignore добавить название файлов - 
  node_modules
  package-lock.json

  
*/
/**
 *  READ FILE
  const fs = require('fs');
  const path = require('path');
  const readableStream = fs.createReadStream(path.join(__dirname,'text.txt'), 'utf-8');

  let data = '';
  readableStream.on('data', chunk => data += chunk);
  readableStream.on('end', () => console.log(data));
  readableStream.on('error', error => console.log('Error', error.message));
*/

/**
 * WRITE TO FILE
  const fs = require('fs');
  const path = require('path');
  const { stdin, stdout } = process;

  const writableStream = fs.createWriteStream(path.join(__dirname,'destination.txt'), 'utf-8');

  stdout.write('Hello!, Enter your message:\n');
  stdin.on('data', data => {
    if (data.toString().toLowerCase().trim() === 'exit') {
      process.exit();
    } else {
      writableStream.write(data, 'utf-8');
    }
  });
  //catches ctrl+c event
  process.on('SIGINT', ()=> {
    process.exit();
  });
  process.on('exit', ()=> {
    console.log('Good Luck, See you later!');
  });
*/

/**
 * SHOW FILE NAME - EXTENTION - SIZE
 * 
  const path = require('path');
  const fs = require('fs');

  const folderDirr = path.join(__dirname, 'secret-folder');

  //Читает содержимое каталога. 
  //читает содержимое папки, как файлы, так и вложенные папки, и возвращает их относительный путь
  //Обратный вызов получает два аргумента (err, files), где files - массив имен файлов в каталоге,
  fs.readdir(folderDirr, {withFileTypes: true}, (err, files) =>{//fs.readdir(path, [options], callback)
    if(err) {
      console.log(err.message)
    };

    files.forEach(file => {
      const fileDirr = path.join(folderDirr, file.name);
      //fs.stat(path[, options], callback) Обратный вызов получает два аргумента (err, stats), где stats - объект {fs.Stats}.
      fs.stat(fileDirr, (err, stats) => {
        if(err) {
          console.log(err.message)
        };

        if(file.isFile()) {
          console.log(path.parse(fileDirr).name + " - " + path.parse(fileDirr).ext.slice(1) + " - " + stats.size/1024 + "Kb");
        }
      })
    })
  })
*/

/**
 * BUILD HTNL, MERGE STYLES
 
  const fs = require('fs');
  const path = require('path');

  const targetDirr = path.join(__dirname,'project-dist');
  const componentsDirr = path.join(__dirname, 'components');
  const stylesDirr = path.join(__dirname, 'styles');
  const templateDirr = path.join(__dirname, 'template.html');
  const assetss = path.join(__dirname, 'assets');
  const targetAsetss = path.join(targetDirr, 'assets');
  const targetHtmlDirr = path.join(__dirname,'project-dist','index.html');
  const targetCss = path.join(__dirname, 'project-dist','style.css');

  //create folder
  fs.mkdir(targetDirr, { recursive: true }, (err) => {
    if (err) throw err;
  });

  //create html
  let content = '';

  fs.readFile(templateDirr, 'utf-8', (err, data) => {
    if (err) throw err;
    content += data;

    fs.readdir(componentsDirr, { withFileTypes: true }, (err, files) => {
      if (err) throw err;
      
      let targetFiles = files.filter(file => file.isFile() && file.name.slice(-4) === 'html');

      if (targetFiles.length === 0) {
        fs.writeFile(targetHtmlDirr, content, (err) => {
          if (err) throw err;
        });

      } else {

        targetFiles.forEach((file) => {
          fs.readFile(path.join(componentsDirr, file.name), 'utf-8', (err, data) => {
            if (err) throw err;

            let sample = '{{' + path.parse(file.name).name + '}}';
            content = content.replaceAll(sample, data);

            fs.writeFile(targetHtmlDirr, content, (err) => {
              if (err) throw err;
            });
          });
        });
      }
    });
  });

  // merge styles

  const writeableStream = fs.createWriteStream(targetCss, 'utf8');

  fs.readdir(stylesDirr, {withFileTypes: true}, (err, files) =>{
    if (err) throw  err;

    files.forEach(file => {
      const filePath = path.join(stylesDirr, './', file['name']);

      if(file.isFile() && file.name.slice(-3) === 'css') {
        fs.createReadStream(filePath, 'utf8').pipe(writeableStream);
      }
    })
  });

  //copy assets COPY FILES FROM ONE FOLDER TO ANOTHER
  async function copyFiles (from, copyTo) {
    await fs.promises.rm(copyTo, { recursive: true, force: true });

    fs.mkdir(copyTo, { recursive: true }, (err) => {
      if (err) throw err;
    });

    fs.readdir(from, { withFileTypes: true }, (err, files) => {
      if (err) throw err;

      files.forEach(file => {
        if (file.isFile()) {

          fs.copyFile(path.join(from, file.name), path.join(copyTo, file.name), (err) => {
            if (err) throw err;
          });

        } else if (file.isDirectory()) {

          fs.mkdir(path.join(copyTo, file.name), { recursive: true }, (err) => {
            if (err) throw err;
          });
          copyFiles(path.join(from, file.name), path.join(copyTo, file.name));
        }
      });
    });
  }

  copyFiles(assetss, targetAsetss);
*/


// СОЗДАЕМ СЕРВЕР, ВЫВОДИМ HTML НА СТРАНИЦУ

const http = require('http')// ПОМЕСТИТ МОДУЛЬ В КОНСТАНТУ
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
// if (req.url === '/') {
//   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
//     if (err) {
//       throw err
//     }
//
//     res.writeHead(200, {
//       'Content-Type': 'text/html'
//     })
//     res.end(data)
//   })
// } else if (req.url === '/contact') {
//   fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
//     if (err) {
//       throw err
//     }
//
//     res.writeHead(200, {
//       'Content-Type': 'text/html'
//     })
//     res.end(data)
//   })
// }

let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
const ext = path.extname(filePath)
let contentType = 'text/html'

switch (ext) {
  case '.css':
    contentType = 'text/css'
    break
  case '.js':
    contentType = 'text/javascript'
    break
  default:
    contentType = 'text/html'
}

if (!ext) {
  filePath += '.html'
}

fs.readFile(filePath, (err, content) => {
  if (err) {
    fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Error')
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.end(data)
      }
    })
  } else {
    res.writeHead(200, {
      'Content-Type': contentType
    })
    res.end(content)
  }
})
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server has been started on ${PORT}...`)
})