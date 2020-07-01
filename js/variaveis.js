const name = 'Celso';

// Não podemos alterar o valor
//name = 'Celso';

const user = {
    name: 'Celso'
};

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

// Não podemos fazer o objeto "apontar" para outro lugar
//user = {
//    name: 'Celso'
//};

const persons = ['Celso', 'Pedro', 'Guilherme'];

// Podemos adicionar novos item
persons.push('João');
//['Celso', 'Pedro', 'Guilherme', 'João']

// Podemos remover algum item
persons.shift();
//['Pedro', 'Guilherme', 'João']

// Podemos alterar diretamente
persons[1] = 'James';
//['Pedro', 'James', 'João']

console.log('\nArray após as alterações: ', persons);



/*
(() => {
    const test = 'valor função';
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        const test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();
*/

/*
(() => {
    let test = 'valor função';
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        let test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();
*/

/*
var test = 'example';

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        var test = 'example';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();*/