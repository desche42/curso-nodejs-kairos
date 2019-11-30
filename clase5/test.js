
/**
 * Test modulke to debug node projects
 * launch with node --inspect test.js
 */

let counter = 0;

setInterval(() => {
  console.log(`${counter++} s`);
}, 1000);


// si quieremos parar el proceso en la primera línea de ejecución,
// podemos lanzar el proceso con el flag --inspect-brk

// también tenemos el pacquete ndb para debugear mejor

