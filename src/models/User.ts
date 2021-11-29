import axios, { AxiosResponse } from 'axios';

interface UserProps {
    //question marks make properties optional
    name?: string;
    age?: number;
    id?: number;
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

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
        .then((response: AxiosResponse): void => {
            this.set(response.data);
        })
    }
}