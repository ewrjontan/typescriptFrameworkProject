import { User } from "./models/User";

//const user = new User({id: 1});

//user.set({name: 'New Name', age: 69});

//const user = new User({name: 'a new user', age: 3000});

//console.log(user.get('name'));




//user.set({name: 'new Name'});


const user = new User({id: 1});

user.on('change', () => {
    console.log(user);
});

user.fetch();

/*
user.on('change', () => {
    console.log('user was changed');
});*/

//console.log(user.get('name'));

