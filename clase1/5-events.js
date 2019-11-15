// todo esto funciona por emisores de envento <EventEmitter>
const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('current-date', console.log);
ee.emit('current-date', +new Date());
ee.off('current-date');

// Event-Loop es lo que tiene node por debajo
// al ser monohilo, si lo bloqueamos con una función, el eventloop también se queda bloqueado
// igual pasa con el navegador, que también utiliza por debajo tel mismo motor de JS


