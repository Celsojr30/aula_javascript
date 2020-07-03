function Pessoa(customProperties) {
    return {
        name:'Celso',
        lastName: 'Junior',
        ...customProperties
    }
}

const p = Pessoa({name: 'Custom Name', age: 45});
console.log(p);