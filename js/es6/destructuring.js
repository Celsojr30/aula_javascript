/*
var  arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];
*/

var obj = {
    name: 'Celso',
    props: {
        age: 45,
        favoriteColors: ['black', 'blue']
    }
}

var name = obj.name;
var age = obj.props.age;

var arr = [{ name: 'Apple', type: 'fruit' }];

var fruit1 = arr[0].name;

// Destructuring Assignment

/*
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(tomato2);
*/

/*
var { name } = obj;

var { 
    props: { 
        age: age2,
        favoriteColors:[color1, color2]
    } 
} = obj;

//console.log(age2);
console.log(color1);
*/

/*
var [{ name: fruitName }] = arr;

console.log(fruitName);
*/

// functions

function sum([a, b] = [0, 0]) {
    return a + b;
}

console.log(sum([5, 5]));
