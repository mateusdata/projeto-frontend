import axios from 'axios'

const axiosInstase = axios.create({
    baseURL:"https://api-projeto-beryl.vercel.app/"
})
export default axiosInstase;