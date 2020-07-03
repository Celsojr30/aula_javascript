const users = ['Celso', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Celso',
        age: 45,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: gender.WOMAN
    }
];

// Retornar a quantidade de itens de um array
//console.log('Items:', persons.length);

// Verificar se é array
//console.log('A variável persons é um array:', Array.isArray(persons));

// Iterar os itens do array
//persons.forEach((persons, index, arr) => {
//    console.log(`Nome: ${persons.name} index: ${index}`, arr);
//});

// Filtrar array
const mens = persons.filter(persons => persons.gender === gender.MAN);
//console.log('\nNova lista apenas com homens:', mens);

// Retornar um novo
const personsWithCourse = persons.map(persons => {
    persons.course = 'Indrodução ao Javascript';
    return persons;
});

//console.log('\nPessoas com a adição do course:', personsWithCourse)

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

//console.log('\nSoma de idade das pessoas', totalAge);

// Juntando operações
const totalEvenAges = persons
                        .filter(persons => persons.age % 2 === 0)
                        .reduce((age, persons) => {
                            age += persons.age;
                            return age;
                         }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);
