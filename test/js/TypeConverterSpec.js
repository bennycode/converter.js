'use strict';

describe('TypeConverter', function() {

  var converter = undefined;

  beforeAll(function(done) {
    if (typeof exports === 'object') {
      converter = require('../../index');
      done();
    }
  });

  describe('A suite', function() {
    it('encodes and decodes an UTF-8 character', function() {
      const omega = '\u03A9';

      const encoded = converter.TypeConverter.unicodeStringToTypedArray(omega);
      const decoded = converter.TypeConverter.typedArrayToUnicodeString(encoded);

      expect(decoded).toBe(omega);
    });
  });
});

