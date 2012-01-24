# phaseshift

## Installation

`npm install phaseshift`

## Usage

```javascript
var phase = require('phaseshift');

phase([1,2,3,4]);     // [4,1,2,3]
phase([1,2,3,4], 1);  // [4,1,2,3]
phase([1,2,3,4],-1);  // [2,3,4,1]
```

## Licence

MIT/X11
