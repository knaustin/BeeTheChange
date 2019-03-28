import axios from 'axios';

export default {
    getFarmers: name => {
        return axios.get(`http://localhost:3001/api/farmers?name=${name}`);
    },
    getFarmer: id => {
        return axios.get(`http://localhost:3001/api/farmers/${id}`);
    },
    getUser: id => {
        return axios.get(`http://localhost:3001/api/users/${id}`);
    },
};
