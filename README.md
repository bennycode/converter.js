# wire-webapp-converter

First draft of a converter collection ("something" → "something-else"). Written in ECMAScript 6.
 
## Idea

```javascript
const converter = require('wire-webapp-converter');

const result = converter.TypeConverter.unicodeStringToTypedArray('\u03A9');
console.log('Length', result.byteLength); // 3
```
