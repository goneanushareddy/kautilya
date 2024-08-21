import axios from "axios";

export default axios.create({
    baseURL : 'https://guprojects.gitam.edu/kautilya-admin/api/',
    headers:{
        'Content-Type': 'application/json',
        'Authorization' : '8efgh5gyujk'
    }
})