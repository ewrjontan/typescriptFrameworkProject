import { Eventing} from './Eventing';

export interface UserProps {
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

}