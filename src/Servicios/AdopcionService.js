import axios from 'axios';

export class AdopcionService{

baseURL = "http://localhost:8080/gato"

getAll(){
    return axios.get(this.baseURL + "/getAll").then(res => res.data.data);
}
}