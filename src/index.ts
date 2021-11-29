import { User } from "./models/User";

//const user = new User({id: 1});

//user.set({name: 'New Name', age: 69});

const user = new User({name: 'a new user', age: 3000});


user.events.on('change', () => {
    console.log('change');
})

user.events.trigger('change');
