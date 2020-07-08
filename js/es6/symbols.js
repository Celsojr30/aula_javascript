// Symbols

const uniqueId = Symbol('Hello');

/*
const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);
*/

// Well known symbols

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

/*
const it = arr[Symbol.iterator]();

while (true) {
    let { value, done } = it.next();

    if (done) {
        break;
    }
    console.log(value);
}
*/

/*
for (let value of arr) {
    console.log(value);
}
*/

/*
for (let value of str) {
    console.log(value);
}
*/

//console.log(arr[Symbol.iterator]().next());

/*
const obj = {
    value: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        
        return {
            next: () =>{
                i++;

                return {
                    value: this.value[i - 1],
                    done: i > this.value.length
                };
            }
        };
    }
};
*/

/*
for (let value of obj) {
    console.log(value);
}
*/

//const arr2 = [...obj];

//console.log(arr2);


// Generators

/*
function* hello() {
    console.log('Hello');
    yield 1;

    console.log('From');
    const value = yield 2;

    console.log(value);
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));
*/

/*
function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
*/

const obj = {
    value: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.value.length; i++) {
            yield this.value[i];
        }
    }
};

for (let value of obj) {
    console.log(value);
}
