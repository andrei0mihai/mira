import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://my-json-server.typicode.com/andrei0mihai/mira`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getImages() {
    return apiClient.get('/images')
  }
}
