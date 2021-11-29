import axios, { AxiosResponse } from 'axios';
import { Eventing} from './Eventing';

interface UserProps {
    //question marks make properties optional
    name?: string;
    age?: number;
    id?: number;
}

export class User {
    public events: Eventing = new Eventing();

    // set to private so other engineers can't just access user data
    constructor(private data: UserProps){}

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: UserProps): void {

        Object.assign(this.data, update);
    }


    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
        .then((response: AxiosResponse): void => {
            this.set(response.data);
        })
    }

    save(): void {
        const id = this.get('id');

        if (this.get('id')){
            // Put
            axios.put(`http://localhost:3000/users/${id}`, this.data);
        }else{
            // post
            axios.post('http://localhost:3000/users', this.data);
        }
    }
}