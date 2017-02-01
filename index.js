"use strict";

const TypeConverter = require('./src/js/TypeConverter');

try {
  TypeConverter.unicodeStringToTypedArray(7);
} catch (error) {
  console.log(error.message);
}

const unicode = "Heart eyes emoji 😍";
const result = TypeConverter.unicodeStringToTypedArray(unicode);
console.log('Length', result.byteLength);
