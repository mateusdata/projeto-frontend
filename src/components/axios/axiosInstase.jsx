import axios from 'axios'

const axiosInstase = axios.create({
    baseURL:"http://localhost:3003/"
})
export default axiosInstase;