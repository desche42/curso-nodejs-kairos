// la variable process nos da toda la info del proceso

const result = [
  // id del proceso
  'pid',
  // directorio del proceso
  'cwd',
  // argumentos pasados al proceso
  'argv',
  // variables de entorno
  'env'
].reduce((acc, id) => {
  acc[id] = process[id] instanceof Function
    ? process[id]() : process[id];
  return acc;
}, {});

console.log(result);

// el proceso emite algunos eventos

process.on('unhandledRejection', () => console.log('you fucked up'));
process.on('exit', () => console.log('about to close the process'));
