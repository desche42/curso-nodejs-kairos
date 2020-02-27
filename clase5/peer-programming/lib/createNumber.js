module.exports = function createNumber(n) {
  if (!Number(n)) {
    return;
  }
  return new FancyNumber(n);
}

class FancyNumber {
  constructor(number) {
    this.number = number;
    this._log(this.number);
  }

  add(n = 1) {
    this._log(this.number += n);
    return this;
  }

  substract() {
    this._log(--this.number);
    return this;
  }

  _log(number) {
    console.log(number);
  }
}