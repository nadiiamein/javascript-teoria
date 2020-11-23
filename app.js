const heading = document.getElementById('hallo');
//const heading2 = document.getElementsByTagName('h2-class')[0];
//const heading2 = document.querySelector('.h2-class');
const heading2 = document.querySelector('#sub-hallo');
//const heading3 = heading2.nextElementSibling;
const h2List = document.querySelectorAll('h2');
console.log(h2List)

const heading3 = h2List[h2List.length-1];
console.log(heading3);

console.log(heading2);
console.dir(heading.id);
console.dir(heading.textContent);

setTimeout( () => {
addStylesTo(heading, 'Deutsch', 'red')}, 1500);

setTimeout( () => {
    addStylesTo(heading2, 'Und commt alles dabei','orange', '2rem')}, 4000);


setTimeout( () => {
    addStylesTo(heading3, 'Praktika')}, 3000);

function addStylesTo(node, text, color = 'black', fontSize = '1rem') {
    node.textContent = text;
    node.style.color = color;
    node.style.textAlign ='center';
    node.style.backgroundColor ='yellow';
    node.style.padding = '2rem';
    // falsy: '', undefind, null,0,false
    if (fontSize) {
        node.style.fontSize = fontSize;
    }
}

heading.onclick = () => {
    if(heading.style.color === 'red') {
        heading.style.color = '#000';
        heading.style.backgroundColor = 'red';
    } else {
        heading.style.color = 'red';
        heading.style.backgroundColor = 'yellow';
    }
};