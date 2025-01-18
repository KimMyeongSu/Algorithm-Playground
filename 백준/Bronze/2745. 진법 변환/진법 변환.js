const fs = require('fs');
const [N, B] = fs.readFileSync("/dev/stdin")
   .toString()
   .trim()
   .split(' ');

console.log(
   [...N].reverse().reduce((r, c, i) => 
       r + (!isNaN(c) ? parseInt(c) : c.charCodeAt(0) - 55) * Math.pow(+B, i), 
   0)
);