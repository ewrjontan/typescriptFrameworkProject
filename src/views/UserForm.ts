import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps>{

    //object array of keys that takes no arguments and returns nothing
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick
        };
    }

    //arrow function fixes binding issues
    onSetAgeClick = (): void =>  {
        this.model.setRandomAge();
    }

    
    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');

        //type guard so 'input' does not throw error due to being html element or null
        if (input) {
            const name = input.value;
            this.model.set( { name });
        }
    }

    onSaveClick = (): void => {
        this.model.save();
    }

    template(): string {
        return `
            <div>
                <input placeholder="${this.model.get('name')}"/>
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-model">Save User</button>
            </div>
        `;
    }

    
}