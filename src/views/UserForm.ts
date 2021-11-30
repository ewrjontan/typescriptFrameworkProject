import { User } from '../models/User';

export class UserForm {
    constructor(public parent: Element, public model: User){
        this.bindModel();
    }

    bindModel(): void {
        this.model.on('change', () => {
            this.render();
        });
    }


    //object array of keys that takes no arguments and returns nothing
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick
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

    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <div> Username: ${this.model.get('name')} </div>
                <div> Age: ${this.model.get('age')} </div>
                <input/>
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
            </div>
        `;
    }

    bindEvents(fragment: DocumentFragment): void{
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            })
        }
    }

    render(): void {
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    }
}