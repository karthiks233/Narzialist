import axios from 'axios';

export default function handler(req, res) {
    const data = axios
    .get('https://django-rapid-test.herokuapp.com/')
    .then((res) => {
        console.log("printing from get_data api", res.data);
        return res.data;
    })
    .catch((err) => {
        console.error(err);
    })
}