//1 name
//variable
var name = 'Nadiia'; //alt
const lastName ='Nadezdona';//neu am besten benutzen string
let age = 26;//neu number
console.log(age);//im console
console.log(name);
age = 28;//wechseln
console.log(age);
const isProgrammer = true;//boolean

//style CamelCase
 const firstName = 'Nadin';
 const _privat = 'private';
 const $ = 'some value';
//2 Mutacion
 //console.log('Name:' + firstName + ',und alt sie ist: ' + age);
 //const FamiliaName = prompt('Enter ihre Name');
 //alert(firstName + ' ' + FamiliaName);
 //3 operand
 let currentYear = 2020;
 const birdYaer = 1988;
 const MeinAge =currentYear - birdYaer;
 console.log(MeinAge);

 const a =10;
 const b= 5;

 console.log(a+b);
 console.log(a-b);
 console.log(a*b);
 console.log(a/b);
 console.log(currentYear++);
 console.log(currentYear);
 console.log(++currentYear);
 console.log(--currentYear);
 let c= 32;
 //c= c+a;
 c+=a;
 c-=a;
 c*=a;
 c/=a;

 //4 Type
 const Buch = true;
 const Spile = 'Blur';
 const price = 300;
 let x;
 console.log(typeof Buch);
 console.log(typeof Spile);
 console.log(typeof price);
 console.log(typeof x);
 console.log(null);

 //5 prioritet
 const fullAge = 34;
 const Geb =1990;
 const Heute = 2020;
 const isFullAge = Heute - Geb <= fullAge;
 console.log(isFullAge);
//6 false true
const Status = 'fail' //ready,fail,pending
if(Status === 'ready') {
    console.log('Ich bin fertig');
}else if (Status === 'pending') {
    console.log('Du muss noch warten');
}else {
    console.log('Ich muss zu Haus bleiben');
}

const isFertig = false;
if (isFertig) {
    console.log('Alle ist da!');
}else {
    console.log('Alle nicht da!');
}

isFertig ? console.log('Alle ist da') : console.log('Alle nicht da')

const num1= 42;//number
const num2 ='42';//string
console.log(num1 === num2);

//7 boolean
true && true
https://developer.mozilla.org/ru/

//8 function

function calculateAge(year) {
    return 2020 - year;
}
console.log(calculateAge(1993));
console.log(calculateAge(1997));
console.log(calculateAge(1998));

function logInfoAbout(name, year) {
    const age = calculateAge(year);
    if(age > 0) {
    console.log('Das ist - ' + name + ' und ist ' + age + ' Jahre alt');
    }else {
        console.log('Das Zukunft')
    }
}

logInfoAbout('Lena', 1934);
logInfoAbout('Petr', 1999);
logInfoAbout('Petr', 2025);
//9 massiv
const cars = ['Audi', 'Ford', 'Reno'];
//const cars mew Array('Audi','Ford','Reno');
console.log(cars.length);
console.log(cars[1]);
console.log(cars[0]);
console.log(cars[2]);

cars[0]='Porsche';
cars[3]='Mazda';
console.log(cars);
cars[cars.length]='Smart';
console.log(cars);

//10 for,foreach
const kleid =['puli','socken','rock','hose'];
//for (let i=0; i<cars.length;i++) {
  //  const stuck =kleid[i];
    //console.log(stuck);
//}
for(let stuck of kleid) 
{
    console.log(stuck);
}
// 11 objct
const person = {
    firstName: 'Lena',
    lastName: 'Programm',
    year: 1991,
    languages: ['ru','en','de'],
    hasWife:false,
    greet: function() {
        console.log('greet from person')
        
    }
};
console.log(person);
console.log(person.firstName);
console.log(person['lastName']);
const key = 'year';
console.log(person[key]);
person.hasWife =true;
person.isPtogrammer = true;
console.log(person);
