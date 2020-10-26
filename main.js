const { pow } = require('./pow');
const { fact } = require('./fact');

const a = Math.floor(Math.random() * 8) + 1;
const b = Math.floor(Math.random() * 8) + 1;

console.log('Az elso szam:', a, ', a masodik szam:', b, 'a hatvanyuk pedig:', pow(a, b));
console.log(a, 'faktorialisa:', fact(a));
