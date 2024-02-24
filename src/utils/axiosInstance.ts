import axios from "axios"
const apiUrl = process.env.REACT_APP_BASE_URL
export const axiosGuestInstance = axios.create({
    baseURL : apiUrl
})

