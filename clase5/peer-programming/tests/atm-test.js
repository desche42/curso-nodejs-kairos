const {expect} = require('chai');
const atm = require('../lib/atm.js');

it('should be a function', () => {
  expect(atm).to.be.a('function');
});

it('should return 5 when argument is 5', () => {
  expect(atm(5)).to.be.equal(5);
});

it('should return null if not valid amount', () => {
  expect(atm(13)).to.be.null;
  expect(atm(12)).to.be.null;
});

it('should return [5, 10] when 15', () => {
  expect(atm(15)).to.be.deep.equal([5, 10]);
});

it('should return [5, 50, 50] when 105', () => {
  expect(atm(105)).to.be.deep.equal([5, 50, 50]);
});

it('should return [5, 50, 50, 50] when 165', () => {
  expect(atm(105)).to.be.deep.equal([5, 50, 50]);
});
