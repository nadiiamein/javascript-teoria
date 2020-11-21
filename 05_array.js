//Array
const cars = ['Mazda','Ford','BMW', 'RENO'];
const fib = [1, 1, 2, 3, 5, 8, 13];
cars.push('Porshe');//add el
console.log(cars);
cars.unshift('W');

const firstItem = cars.shift();
console.log(firstItem);
console.log(cars);
const lastCar = cars.pop();
console.log(lastCar);
console.log(cars);
console.log(cars.reverse());
console.log(cars);

//UBUNG 1 'REVERSE'
const text = 'Hallo , wir lernen JavaScript';
const reverseText = text.split('').reverse().join('');
console.log(reverseText);

console.log(cars.indexOf('BMW'));//suchen position element
const index = cars.indexOf('BMW');
cars[index] = 'Dascha';
console.log(cars);
const people = [
    {name: 'Peter', geld: 4200},
    {name: 'Paola', geld: 3200},
    {name: 'Piper', geld: 2200},

]

let findedPerson;
for (const person of people) {
    if(person.geld === 2200){
        findedPerson = person;
    }
}
console.log(findedPerson);//1 sposb

const index1 = people.findIndex(function(person){
    return person.geld === 2200;
});
console.log(people[index1]);

const person = people.find(function(person) //2 sposob
{
    return person.geld === 4200;
});
console.log(person);

const person1 = people.find(person => person.geld === 4200);//3 sposob
console.log(person1);
console.log(cars.includes('Mazda')); //ob das elemet ist in array

const upperCaseCars = cars.map(car => {
    return car.toUpperCase();
});
console.log(upperCaseCars);
console.log(cars);
const pow2 = num => num ** 2;
const pow2Fib = fib.map(num => num ** 2);
console.log(pow2Fib);
const pow3Fib = fib.map(pow2);
console.log(pow3Fib);
const filterNumbers = pow3Fib.filter(num => num > 20);
console.log(filterNumbers);
const sqrt = num => Math.sqrt(num);
const pow4Fib = fib.map(pow2).map(Math.sqrt);
console.log(pow4Fib);



const AllBudget = people.filter(person => person.geld> 3000).reduce((acc, person) => {
    acc += person.geld;
    return acc;}, 0);

    console.log(AllBudget);


