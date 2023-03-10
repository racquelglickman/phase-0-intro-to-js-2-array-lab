// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

destructivelyAppendCat('Last Cat');
console.log(cats);

function destructivelyPrependCat(name){
    cats.unshift(name);
}

destructivelyPrependCat('First Cat');
console.log(cats);

function destructivelyRemoveLastCat(){
    cats.pop();
}

destructivelyRemoveLastCat();
console.log(cats);

function destructivelyRemoveFirstCat(name){
    cats.shift();
}

destructivelyRemoveFirstCat();
console.log(cats);

function appendCat(name){
    return [...cats, name];
}

console.log(appendCat("Appended Cat"));

function prependCat(name){
    return [name, ...cats];
}

console.log(prependCat("Prepended cat"));

function removeFirstCat(){
    return cats.slice(1);
}

function removeLastCat(){
    return cats.slice(0,-1);
}

console.log(cats.slice(0,-1))



