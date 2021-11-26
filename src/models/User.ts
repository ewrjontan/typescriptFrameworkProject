interface UserProps {
    //question marks make properties optional
    name?: string,
    age?: number
}

//type alias used for type annotation
type Callback = () => void;


export class User {
    events: {[key: string]: Callback[] } = {};

    // set to private so other engineers can't just access user data
    constructor(private data: UserProps){}

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: UserProps): void {

        Object.assign(this.data, update);
    }

    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];   

        if (!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach(callback => {
            callback();
        })
    }
}