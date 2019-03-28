import axios from 'axios';

export default {
    getFarmers: name => {
        return axios.get(`http://localhost:3000/api/farmers?name=${name}`);
    },
    getFarmer: id => {
        return axios.get(`http://localhost:3000/api/farmers/${id}`);
    },
    getUser: id => {
        return axios.get(`http://localhost:3000/api/users/${id}`);
    },
};
