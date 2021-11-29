
export class Attributes<T> {
    // set to private so other engineers can't just access user data
    constructor(private data: T){}

    //basically says type of K can only be the types of T (ie the passed in 
    //property). In this case we have properties of name, age and id, therefore
    //the only allowable types are name, age and id
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }

    set(update: T): void {
        Object.assign(this.data, update);
    }

    getAll(): T {
        return this.data;
    }

}

