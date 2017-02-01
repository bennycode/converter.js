'use strict';

const UnexpectedInputError = require('./UnexpectedInputError');

class TypeConverter {
  constructor() {
  }

  static unicodeStringToTypedArray(unicodeString) {
    if (unicodeString instanceof Uint8Array) {
      return unicodeString;
    } else if (typeof unicodeString === 'string') {
      if (typeof TextEncoder === 'function') {
        return new TextEncoder('utf-8').encode(unicodeString);
      } else {
        const escapedString = encodeURIComponent(unicodeString);

        const pattern = new RegExp('%([0-9A-F]{2})', 'g');
        const binaryString = escapedString.replace(pattern, function(match, subString) {
          return String.fromCharCode(`0x${subString}`);
        });

        const typedArray = new Uint8Array(binaryString.length);

        Array.prototype.forEach.call(binaryString, function(character, index) {
          typedArray[index] = character.charCodeAt(0);
        });

        return typedArray;
      }
    } else {
      throw new UnexpectedInputError(`Unexpected input type "${typeof unicodeString}".`);
    }
  }
}

module.exports = TypeConverter;
