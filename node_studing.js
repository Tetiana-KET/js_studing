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

  1. start the project, create json - npm init -y
  2. install necessary module - npm install --save
  Модули и package-lock можно удалять, ОСТАВИТЬ package.json. Если переносим проэкт. Потом просто запустить npm i (install),
  нода подкачает все необходимые зависимости, для указанных в package.json модулях

  Для ГИТ - в .gitignore добавить название файлов - 
  node_modules
  package-lock.json
  
*/

/*
Official site - https://nodejs.org/en => DOCS => ctrl f => enter what are you looking for
NodeJS – a Handbook for Beginners - https://www.freecodecamp.org/news/get-started-with-nodejs/
https://www.youtube.com/watch?v=0TcIslnoXCQ&list=PLNkWIWHIRwMFtsaJ4b_wwkJDHKJeuAkP0&index=5
 
  Код можно писать и выполнять прямо в терминале.
  Такой режим называется REPL 
  Чтобы в него перейти, выполните в терминале команду node
  .help; .exit
  node fileName.js - Откроем файл при помощи VS Code, в терминале. Команда открывает не сам файл, 
  а запускает выполнение кода написанного в файле.
  расширение файла можно не указывать, т.е достаточно написать node test //=> Hello, world!

* Global Variables

  __dirname: This variable stores the path to the current working directory.
  __filename: This variable stores the path to the current working file.

  console.log(__dirname);//C:\Users\Котя\Desktop\Учеба\js_studing
  console.log(__filename);//C:\Users\Котя\Desktop\Учеба\js_studing\node_studing.js

* MODULES
  module.exports is a special object in NodeJS that allows you to export functions, objects, or values from a module, 
  so that other modules can access and use them. 
  in file ./math we export exports.add = (a, b) => a + b; and here we import - const math = require('./math');
  each new assignment to  module.exports will replace the previous one. You should export as an object to group multiple exports together - 
    module.exports = {add, subtract, multiply, divide} - object
  or export each variable separately:
    exports.add = (a, b) => a + b;
    exports.subtract = (a, b) => a - b;
*/ 

const math = require('./math'); //custom module, не встроенный модуль, мы сами создали, поэтому пут
//destruction
const { divide } = require('./math');
const { subtract, multiply } = require('./math');

/*Built In Modules:
/*
* OS Module - Operating System. 
  const os = require('os');

  console.log(os.type());//Windows_NT
  console.log(os.version());//Windows 10 Pro
  console.log(os.homedir());//C:\Users\Котя
  console.log(os.type());//Windows_NT
  console.log(os.version());//Windows 10 Pro

* PATH Module - 
  const path = require('path');
  const myPath = 'C:\Users\Котя\Desktop\Учеба\js_studing\node_studing.js'

  const pathInfo = {
    fileName: path.basename(myPath), //=>      'UsersКотяDesktopУчебаjs_studing\node_studing.js',
    folderName: path.dirname(myPath),//=>      'C:'
    fileExtension: path.extname(myPath),//=>   '.js'
    absoluteOrNot: path.isAbsolute(myPath),//=> false
    detailInfo: path.parse(myPath),//=>
  }

  console.log(pathInfo); => {
    fileName: 'UsersКотяDesktopУчебаjs_studing\node_studing.js',
    folderName: 'C:',
    fileExtension: '.js',
    absoluteOrNot: false,
    detailInfo: {
      root: 'C:',
      dir: 'C:',
      base: 'UsersКотяDesktopУчебаjs_studing\node_studing.js',
      ext: '.js',
      name: 'UsersКотяDesktopУчебаjs_studing\node_studing'
    }
  }  
  
  console.log(path.dirname(__filename)); // path.dirname(__filename)) ===__dirname => C:\Users\Котя\Desktop\Учеба\js_studing
  console.log(path.basename(__filename)); // node_studing.js - filename with.ext
  console.log(path.extname(__filename)); //.js just extension

  console.log(path.parse(__filename)); // => 
  {
    root: 'C:\\',
    dir: 'C:\\Users\\Котя\\Desktop\\Учеба\\js_studing',
    base: 'node_studing.js',
    ext: '.js',
    name: 'node_studing'
  }

  path.join(<paths>): The path.join() function accepts path(s) as strings. 
  It then joins those paths using the system specific path separator and returns the joined path.

  console.log(path.join('grandParentFolder', 'parentFolder', 'child.txt')) =>
  The above code prints different results for different Operating Systems.
  In Windows, it will give this output: grandParentFolder\parentFolder\child.txt 
  while in macOS/Linux, it will give this output: grandParentFolder/parentFolder/child.txt

  path.resolve(<paths>): This function works in a similar way as compared to path.join(). The path.resolve() function just joins the different paths provided to it 
  using the system specific path separator and then appends the final output to the absolute path of the present working directory.


* РАБОТА С ФАЙЛОВОЙ СИСТЕМОЙ - file system
* The FS Module - This module helps you with file handling operations such as:

  const fs = require('fs');
  to create a directory - fs.mkdir()
  to read the contents of a directory - fs.readdir()

  Объект <fs.Stats> предоставляет информацию о файле.
  Stats {
  dev: 2114,
  ino: 48064969,
  mode: 33188,
  nlink: 1,
  uid: 85,
  gid: 100,
  rdev: 0,
  size: 527,
  blksize: 4096,
  blocks: 8,
  atimeMs: 1318289051000.1,
  mtimeMs: 1318289051000.1,
  ctimeMs: 1318289051000.1,
  birthtimeMs: 1318289051000.1,
  atime: Mon, 10 Oct 2011 23:24:11 GMT,
  mtime: Mon, 10 Oct 2011 23:24:11 GMT,
  ctime: Mon, 10 Oct 2011 23:24:11 GMT,
  birthtime: Mon, 10 Oct 2011 23:24:11 GMT }
*/
const path = require('path');

/*EVENTS
the events module, offers the EventEmitter class, which we'll use to handle our events.
You initialize that using

const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

Basic event handling methods: 

emit - Event Publishing - is used to trigger an event
on - vent Subscription - is used to add a callback function that's going to be executed when the event is triggered
once() -  add a one-time listener
removeListener() / off() -  remove an event listener from an event
removeAllListeners() -  remove all listeners for an event
*/

/*STREAMS
ALLOW TO process large amounts of data chunk by chunk on the fly
нужен модуль FS
const fs = require('fs');

*ПОТОК ДЛЯ ЧТЕНИЯ
const readStream = fs.createReadableStream('./path from where we read');
readStream.on('data', (chunk) => {
  создается поток для чтения, 
  вешаем прослушку события 'data'
  на событие запускается функция, которая частями читает дату
  chunk.toString()
})

*ПИШУЩИЙ ПОТОК
  const writeStream = fs.createWriteStream('путь и имя файла, который создаем') =>
                                          (path.join(__dirname,'destination.txt')

  Чтобы прочитать большой файл и записать в новый - записывающий поток помещаем в читающий поток
  readStream.on('data', (chunk) => {
    writeStream.write(chunk);
  })
  Для такой операции существует метод pipe, который передает данные из читающего потока напрямую в пишущий
  readStream.pipe(writeStream);

  отловить ошибки при чтении и при записи

  const handleError = () => {
    console.log('Error');
    readstream.destroy();
    writeStream.end('Finished with Error');
  }

  readStream
    .on('error', handleError)
    .pipe(writeStream)
    .on('error', handleError);

/** КОПИРОВАНИЕ ФАЙЛОВ
 *
  "fs.copyFile"('old_file.txt', 'new_file.txt', callback) 
  первый аргумент - название файла, который необходимо скопировать  (относительный или абсолютный путь к нему),
  во втором пишется новый путь. 
  let fs = require('fs');
    fs.copyFile('old_file.txt', 'new_file.txt', err => {
      if(err) throw err; // не удалось скопировать файл
      console.log('Файл успешно скопирован');
    });

  если файл, путь к которому указан во втором параметре, уже существует, то он будет перезаписан без предупреждения.

  Для этой функции есть особый флаг, который передаётся третьим параметром -  COPYFILE_EXCL. 
  Он не даёт перезаписывать файл назначения, если такой уже существует. 
  Для его использования необходимо передать его третьим параметром, до callback функции:
    let fs = require('fs');
    let { COPYFILE_EXCL } = fs.constants;
    fs.copyFile('old_file.txt', 'new_file.txt', COPYFILE_EXCL, err => {
      if(err) throw err; // не удалось скопировать файл. Он уже существует?
      console.log('Файл успешно скопирован');
    });

  Удаление файлов - "fs.unlink". 
  первый аргумент относительный или абсолютный путь к файлу, который нужно удалить. 
  Во втором параметре ставится callback функция для вывода возможной ошибки:
    let fs = require('fs');
    fs.unlink('folder/file_delete.txt', err => {
      if(err) throw err; // не удалось удалить файл
      console.log('Файл успешно удалён');
    });

    fs.rm(path[, options], callback)
    options:
          - force <boolean> When true, exceptions will be ignored if path does not exist.
          - recursive <boolean> If true, perform a recursive removal. In recursive mode operations are retried on failure. Default: false.

*/
/**
 * ГЛУБОКОЕ РЕКУРСИВНОЕ КОПИРОВАНИЕ
 * 
  const path = require('path');
  const fs = require('fs').promises;

  const sourcePath = path.join(__dirname, 'files');
  const targetPath = path.join(__dirname, 'files-copy');

 const path = require('path');
  const fs = require('fs').promises;

  const sourcePath = path.join(__dirname, 'files');
  const targetPath = path.join(__dirname, 'files-copy');

  async function copyFiles(from = sourcePath, to = targetPath) {
    try {
      // Check if the destination folder exists, if yes, delete it
      await fs.access(to);
      await fs.rm(to, { recursive: true });
    } catch (err) {
      // Folder doesn't exist, no need to delete
    }

    // Create the destination folder
    await fs.mkdir(to, { recursive: true });

    // Read the contents of the source directory
    const files = await fs.readdir(from, { withFileTypes: true });

    // Copy files and directories asynchronously
    await Promise.all(files.map(async (file) => {
      const sourceFilePath = path.join(from, file.name);
      const targetFilePath = path.join(to, file.name);

      if (file.isFile()) {
        await fs.copyFile(sourceFilePath, targetFilePath);
      } else if (file.isDirectory()) {
        await copyFiles(sourceFilePath, targetFilePath);
      }
    }));
  }
  copyFiles();
  Promise.all is a JavaScript method that takes an array of promises and returns a single promise that is fulfilled with an array of the fulfillment 
  values of the input promises, in the same order as the input promises. It's often used when you have multiple asynchronous operations that can be executed concurrently, and you want to wait for all of them to complete before proceeding.
  files.map(async (file) => {...}): This maps each file to a promise. The promises are the result of the asynchronous operations inside the map function.
  await Promise.all(...): This waits for all the promises (asynchronously copying files or directories) to be fulfilled.
  The array of fulfillment values (which is empty in this case as copyFile and copyFiles don't explicitly return anything) is not used here, but it's a common pattern when you need to perform multiple asynchronous operations concurrently.
  In summary, await Promise.all is used to concurrently execute multiple asynchronous operations and wait for all of them to complete before moving on to the next step in your code.
 */



/**
 *READ FILE 
  const fs = require('fs');
  const path = require('path');
  const readableStream = fs.createReadStream(path.join(__dirname,'text.txt'), 'utf-8');

  let data = '';
  readableStream.on('data', chunk => data += chunk);
  readableStream.on('end', () => console.log(data));
  readableStream.on('error', error => console.log('Error', error.message));
*/

//считываем инфо из файла './files/started.txt' и выводим в консоль
const fs = require('fs');
//const path = require('path');
/*
fs.readFile('./files/started.txt', 'utf8', (err, data) => {
	//better way to use path - path.join(__dirname, 'files', 'started.txt') => './files/started.txt'

	//utf8 чтоб расшифровать данные в строку, вместо data.toString()
	if (err) throw err;
	console.log(data); //hi, my name is Tetiana
});
*/

fs.readFile(
	path.join(__dirname, 'files', 'started.txt'),
	'utf8',
	(err, data) => {
		if (err) throw err;
		console.log(data);
	}
);

//exit on uncaught errors. process is in node, no need to export
process.on('uncaughtException', error => {
	console.error(`There was an uncaught error: ${error}`);
	process.exit(1);
});

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
// Создать папку
//fs.mkdir('./folderName', (err) => {});

//delete folder
//fs.rmdir(dir, err => {if (err) throw err;})

//create a new file and write some content into it
fs.writeFile(path.join(__dirname, 'files', 'newCreatedFile.txt'), 'Here what we want to write in a file, the content', (err) => {
  if (err) throw err;
  console.log('writing into a file complete')
} )

//update a file and add more content into it
//if a file doesn't exist it will create a new file as well
fs.appendFile(path.join(__dirname, 'files', 'newCreatedFile.txt'), '\nSome more additional content', (err) => {
  if (err) throw err;
  console.log('adding new info into a file complete')
} )

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
/*
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
*/
