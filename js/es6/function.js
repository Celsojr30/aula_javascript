/*
function log(value) {
    console.log(value);
};

log('test');
*/

/*
var log = function(value) {
    console.log(value);
};

log('test');
*/

/*
var sumOld = function(a, b) {
    return a + b;    
};

console.log(sumOld(5, 5));
*/

/*
function Car() {
    this.foo = 'bar';
}

console.log(new Car());
*/

/*
log('teste');

function log(value) {
    console.log(value);
}
*/

/*
var obj = {
    showContext: function showContext() {
        //console.log(this);
        this.log('teste');

        setTimeout (
            function() {
                this.log('after 1000ms');
            }.bind(this),
            1000
        );
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();
*/

// Arrow functions

/*
var sum = (a, b) => {
    var x =10;
    if (a > b) {
    }
    return a + b;
}
*/

/*
var sum = (a, b) => a + b;

console.log(sum(5, 15));
*/

/*
var createObj = () => ({ test: 123 });
console.log(createObj());
*/

var obj = {
    showContext: function showContext() {
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

obj.showContext();


