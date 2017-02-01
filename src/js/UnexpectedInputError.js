'use strict';

class UnexpectedInputError extends Error {
  constructor(message) {
    super(message);
    Object.setPrototypeOf(this, UnexpectedInputError.prototype);

    this.name = this.constructor.name;
    this.stack = new Error().stack;
  }
}

module.exports = UnexpectedInputError;
