import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-burger-app-78b0e.firebaseio.com/'
})

export default instance