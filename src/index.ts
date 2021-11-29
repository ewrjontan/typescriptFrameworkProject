import { User } from "./models/User";

//const user = new User({id: 1});

//user.set({name: 'New Name', age: 69});

const user = new User({name: 'a new user', age: 3000});

console.log(user.get('name'));

user.on('change', () => {
    console.log('user was changed!');
}) 


user.set({name: 'new Name'});

/*
user.on('change', () => {
    console.log('user was changed');
});*/

//console.log(user.get('name'));

