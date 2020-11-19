//Number
const num =  42;// integer
const float = 42.42; //float
const pow = 10e3;

console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER);
console.log('Math.pow 53', Math.pow(2,53)-1);
console.log ('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER);
console.log('Max_VALUE',Number.MAX_VALUE);
console.log('MIN_VALUE',Number.MIN_VALUE);
console.log('PPSITIVE_INFINITY',Number.POSITIVE_INFINITY);
console.log('NEGATIVE_INFINITY',Number.NEGATIVE_INFINITY);
console.log('1/0',2/0);
console.log(Number.NaN)//not a number
console.log(typeof NaN);
const wird = 2/NaN;
console.log(Number.isNaN(wird));
console.log(Number.isNaN(42));//endet
console.log(Number.isFinite(Infinity));//ohne ende
const stringInt ='40';
const stringFloat ='40.42';
console.log(Number.parseInt(stringInt) +2);
console.log(Number(stringInt) +2);
console.log(+stringInt +2);
