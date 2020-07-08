/*
function sum(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}

console.log(sum(5, 5, 5, 2, 3));
*/

// rest operator ...

/*
function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5, 5, 5, 2, 3));
*/

/*
const sum = (a, b, ...rest) => {
    console.log(a, b, rest)
};

console.log(sum(5, 5, 5, 2, 3));
*/

// spread operator ...
// strings, arrays, literal objects e objetos iteraveis

/*
const multiply = (...args) =>args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply(...rest);
};

console.log(sum(5, 5, 5, 2, 3));
*/

/*
const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);
*/

/*
const str = 'Digital Innovation One';

function logArgs() {
    console.log(arguments);
}

logArgs(...str);
*/

/*
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];

function logArgs() {
    console.log(arguments);
}

logArgs(...arr);
*/

/*
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

logArgs(...arr);
*/

/*
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arr2 = arr.concat([5, 6, 7]);

console.log(arr2);
*/

/*
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arr2 = [...arr, 5, 6, 7];

const arr3 = [...arr2, ...arr, 0, 0, 0];

console.log(arr3);
*/

/*
const arr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

const arrClone = [...arr];

console.log(arrClone);
*/

/*
const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};

console.log(obj2);
*/

const obj = {
    test: 123,
    subObj: {
        test: 123
    }
};

const obj2 = {
    ...obj,
    subObj: {...obj.subObj}
};

obj2.subObj.test = 456;

console.log(obj);

