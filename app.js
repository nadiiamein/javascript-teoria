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