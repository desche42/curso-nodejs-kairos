const {expect} = require('chai');
const sinon = require('sinon');
const createNumber = require('../lib/createNumber.js');



describe.only('createNumber', () => {

  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('should be a function', () => {
    expect(createNumber).to.be.a('function');
  });

  it('should print the number with console.log', () => {
    createNumber(5);
    expect(console.log.calledWith(5)).to.be.ok;
  });

  it('should not print anything if not value passed', () => {
    createNumber();
    expect(console.log.called).to.be.false;
  });

  it('should add 1 to number when add is called', () => {
    createNumber(4).add();
    expect(console.log.args[1][0]).to.be.equal(5);
  });

  it('should substract 1 when called substract', () => {
    const number = createNumber(5);
    expect(number.substract).to.be.a('function');
    number.substract();
    expect(console.log.args[1][0]).to.be.equal(4);
  });

  it('should call add twice', () => {
    createNumber(4).add().add();
    expect(console.log.args[2][0]).to.be.equal(6);
  });

  it('should not work if not a number is passed', () => {
    expect(createNumber('hello')).not.to.throw;
    expect(console.log.called).to.be.false;
  });

  it('should add the number passed as argument to add', () => {
    createNumber(4).add(6);
    expect(console.log.args[1][0]).to.be.equal(10);
  });

});

