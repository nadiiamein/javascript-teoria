//object
const person = {
    name: 'Nadui',
    age: 45,
    isProgrammer: true,
    languages: ['ru', 'ua', 'de', 'en'],
    'complex key': 'Complex Value',
    ['key_' + (1+3)]: 'Computed key',
    greet() {
        console.log('greet from person');
    },
    info() {
        console.info('Information uber  personen:', this.name );
    }

};

console.log(person.name);
console.log(person['age']);
console.log(person['complex key']);
console.log(person);
person.greet();

person.age++;
person.languages.push('by');//add element in key array
//person['key_4'] = undefined;
//delete person[key_4];
// console.log(person);
// console.log(person ['key_4']);
// const name = person.name;
// const age = person.age;
// const languages = person.languages;

const {name, age: personAge = 10, languages} = person;

for (let key in person) {
    if 
(person.hasOwnProperty(key)){
    console.log('key:', key);
    console.log('value:', person[key]);
}
}
const keys = Object.keys(person);
console.log(keys);
keys.forEach((key) => {
    console.log( key);
    console.log( person[key]);

});

//Context
person.info();
