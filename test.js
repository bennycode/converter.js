"use strict";

const converter = require('./index');
const TypeConverter = converter.TypeConverter;

try {
  TypeConverter.unicodeStringToTypedArray(7);
} catch (error) {
  console.log(error.message);
}

const omega = '\u03A9';

const encoded = TypeConverter.unicodeStringToTypedArray(omega);
console.log('Length', encoded.byteLength);

const decoded = TypeConverter.typedArrayToUnicodeString(encoded);
console.log(decoded);
