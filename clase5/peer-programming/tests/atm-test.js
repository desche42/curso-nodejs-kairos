const {expect} = require('chai');
const myFuntion = require('../src/atm.js');

it('returns a String', () => {
  const result = myFuntion();

  console.log('test works')
  expect(result).to.be.a('string');
  expect(result).to.be.equal('hello');
});
