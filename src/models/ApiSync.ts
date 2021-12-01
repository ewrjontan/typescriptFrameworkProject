import axios, { AxiosPromise } from 'axios';


interface HasId {
    id?: number;
}

export class ApiSync<T extends HasId> {
    constructor (public rootUrl: string) {}

    fetch(id: number): AxiosPromise {

        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise {
        //const { id } = data;
        const id = data.id;
        console.log('api sync');
        console.log(data.id);

        if (id){
            // Put
            return axios.put(`${this.rootUrl}/${id}`, data);
        }else {
            // post
            return axios.post(this.rootUrl, data);
        }
    }
}

