const text = new Array(1000000).join('*');

/**
 * esta función, al acceder a la variable data, el colector de basura no puede
 * eliminarla por si a caso se usa
 * @param {*} data
 * @param {*} char
 */
const splitLongText = function (data, char = '') {
  function log() {
    if (data) {
      console.log(data);
    }
  };

  console.log(data.split(char));
};
// setInterval(() => splitLongText(text), 1000);

/**
 * Se puede resolver el problema usando funciones puras
 */
const splitLongTextGood = function (data, char = '') {
  function log(foo) {
    if (foo) {
      console.log(foo);
    }
  };

  log(data.split(char));
};


setInterval(() => splitLongText(text), 1000);


