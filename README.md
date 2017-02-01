# wire-webapp-converter

First draft of a converter collection ("something" → "something-else"). Written in ECMAScript 6.
 
## Idea

```javascript 1.6
const converter = require('wire-webapp-converter');

const result = converter.TypeConverter.unicodeStringToTypedArray('😍');
console.log('Length', result.byteLength); // 21
```
