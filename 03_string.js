//string
const name = 'Nadiia';
const age = 35;

function getAge() {
    return age;
}

 //const output ='Hallo, ich bin ' + name + ' und ich bin ' + age + ' jahre alt ';
 const output =`Hallo, ich bin ${name} und ich bin ${age <20 ? 'A' : 'B'} jahre alt `;
 console.log(output);

 console.log(name.length);
 console.log(name.toUpperCase());//grosse buchstabe
 console.log(name.toLowerCase());//klein buchstabe
 console.log(name.charAt(2));//suchen el
 console.log(name.indexOf('!'));//suchen symbol
 console.log(name.toLowerCase().startsWith('dii'));
 console.log(name.startsWith('Nad'));
 console.log(name.endsWith('Nad'));
 console.log(name.repeat(3));
 const stung = '     password    ';
 console.log(stung);
console.log(stung.trim());
console.log(stung.trimLeft());
console.log(stung.trimRight());

function logPerson(s, nane, age) {
    if (age < 0) {
        age = 'Noch nicht in diesem Welt';
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}
const personName = 'Nadiia';
const personName2 = 'Anna';
const personAge = 37;
const personAge1 = -5;

const output1 = logPerson`Name: ${personName}, Wie alt: ${personAge}!`;
const output2 = logPerson`Name: ${personName2}, Wie alt: ${personAge1}!`;

console.log(output1);
console.log(output2);

