interface UserProps {
    name: string,
    age: number
}


export class User {
    // set to private so other engineers can't just access user data
    constructor(private data: UserProps){}

    get(propName: string): (number | string) {
        return this.data[propName];
    }
}