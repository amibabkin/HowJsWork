'use strict'

const user = {
    name: 'John',
    age: 20
}

Object.defineProperty(user, 'name', {
    writable: false
})

const descriptor = Object.getOwnPropertyDescriptor(user, 'name')

// user.name = 'Pete' // error

console.log(descriptor)

Object.defineProperty(user, 'age', {
    enumerable: false
})

for (let key in user) {
    console.log(user[key])
}