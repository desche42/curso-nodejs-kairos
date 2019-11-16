const fs = require('fs');

// podemos trabajar con promesas con el método fs.promises.<función que deuvleve promesa>
// esto está en versión experimental en la versión 14
// también se puede transformar en promesas:

const util = require('util');
const readFilePromise = util.promisify(fs.readFile);

async function readCurrentfile () {
  const buffer = await readFilePromise('4-filesystem.js');
  return await readFilePromise('4-filesystem.js', 'utf8');
};

const writeFilePromise = util.promisify(fs.writeFile);

async function copyCurrentFile () {
  await writeFilePromise('copiedfile.js', await readCurrentfile());
  console.log('copied');
};

// path functions
const path = require('path');

console.log(path.dirname('tmp/4-filesystem.js')); // tmp
console.log(path.basename('tmp/4-filesystem.js')); // 4-filesystem.js
console.log(path.resolve('tmp', '..', '4-filesystem.js')); // index.js

// hay otras cosas como path.join, __dirname, __filename
