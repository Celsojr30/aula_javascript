const user = {
    name: 'Celso',
    lastName: 'de Azevedo Carvalho Junior'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
};

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user);

