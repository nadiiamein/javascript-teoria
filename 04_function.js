//function
//function declaration
function greet(name) {
    console.log('Hallo - ', name);
}
//function Expression
const greet2 = function greet2(name) {
    console.log('HAllo 2 -' , name);
}
greet('Petr');
greet2('Angela');
console.log(typeof greet);
console.dir(greet);
//2 anonim function
let counter = 0;
const interval = 
setInterval(function(){
    if (counter === 5) {
        clearInterval(interval);
    } else {
    console.log(++counter);}
}, 1000);

//3 arrow function
function greet3(name) {
    console.log('Hallo - ', name);
}

const arrow = (name) => {
    console.log('Hallo - ', name);
}

arrow('Winter');
const arrow2 = name => console.log('Hallo - ', name);
arrow2('Herbst');
const pow2= num => num **2;
console.log(pow2(5));

//4 param selbstverstadnis
const sum = (a= 42, b= a* 2) => a + b;
console.log(sum());
console.log(sum(5,6));

function sumAll(...all) {
    let result = 0;
    for(let num of all){
result += num;    }
    return result;
}
const res = sumAll(1,5,7,8,3,5);
console.log(res);

//5 Ring

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    };
}
const logWithLastName = createMember('Luis');
console.log(logWithLastName('Hirsh'));
console.log(logWithLastName('Poptr'));