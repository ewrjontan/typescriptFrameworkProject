import { Eventing} from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
    //question marks make properties optional
    name?: string;
    age?: number;
    id?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

    

}