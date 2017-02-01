'use strict';

const UnexpectedInputError = require('./UnexpectedInputError');

class TypeConverter {
  constructor() {
  }

  static typedArrayToUnicodeString(typedArray) {
    if (typedArray instanceof Uint8Array) {
      if (typeof TextDecoder === 'function') {
        return new TextDecoder('utf-8', {fatal: true}).decode(typedArray);
      } else {
        const binaryString = Array.prototype.map.call(typedArray, function(character) {
          return String.fromCharCode(character);
        }).join('');

        const pattern = new RegExp('(.)', 'g');
        const escapedString = binaryString.replace(pattern, function(match, subString) {
          let code = subString.charCodeAt(subString).toString(16).toUpperCase();
          if (code.length < 2) {
            code = `0${code}`;
          }
          return `%${code}`;
        });

        return decodeURIComponent(escapedString);
      }
    } else {
      throw new UnexpectedInputError(`Unexpected input type "${typeof unicodeString}".`);
    }
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
