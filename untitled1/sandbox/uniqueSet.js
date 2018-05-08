var input = require('/Users/schaud3/Documents/input.json');
console.log(input.orgId.length);
let unique = [...new Set(input.orgId)];
console.log(unique.length)