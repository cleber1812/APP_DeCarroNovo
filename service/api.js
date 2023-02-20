import axios from 'axios'

// const api = axios.create({baseURL: 'http://10.0.2.2:3000/'}) 
// const api = axios.create({baseURL: 'http://localhost:3000/'}) 
// const api = axios.create({baseURL: '127.0.0.1:3000/'}) 
// const api = axios.create({baseURL: 'https://api-carros-aula.herokuapp.com/'}) 
// const api = axios.create({baseURL: 'http://192.168.3.104:3000/'})
// const api = axios.create({baseURL: 'http://10.70.52.80:3000/'})

const api = axios.create({baseURL: 'http://192.168.0.114:3000/'})
//const api = axios.create({baseURL: 'https://desolate-wildwood-71856.herokuapp.com/'})

export default api
