import axios from 'axios'
import React from 'react'

const axiosInstase = axios.create({
    baseURL:"http://localhost:3001/"
})
export default axiosInstase;