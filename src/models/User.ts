import { Model } from './Model';

export interface UserProps {
    //question marks make properties optional
    name?: string;
    age?: number;
    id?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  
    
}
