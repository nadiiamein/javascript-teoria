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
console.log(Number.parseInt(stringInt) +2);//function parseInt wehseln string fur number
console.log(Number(stringInt) +2);
console.log(+stringInt +2);
console.log(parseInt(stringFloat) + 2);
console.log(+stringFloat +2);
console.log(0.2 + 0.4);//0.600000001
console.log(+(0.4 + 0.2).toFixed(1));//0.6
console.log(parseFloat((0.4 + 0.2).toFixed(1)));//0.6

//Bigint
console.log(typeof 900712354709876543214567n);
console.log(-900712354709876543214567n);//console.log(900712354709876543214567.45678);error
console.log(Math.pow(5, 3));//stepen
console.log(Math.sqrt(25));//kvadrat
console.log(Math.abs(-42));//modul
console.log(Math.max(42,12,23,11,4));
console.log(Math.min(42,12,23,11,4));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.8));
console.log(Math.trunc(4.6));
console.log(Math.random());

//4 Exampl
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomBetween(10, 42));


