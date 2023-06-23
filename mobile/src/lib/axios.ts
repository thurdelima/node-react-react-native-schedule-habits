import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://10.0.2.2:3333'
    //case you use android avd emulator, localhost android is 10.0.2.2
})