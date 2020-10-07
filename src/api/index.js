import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const getAllExperiences = () => api.get(`/experience`)

const apis = {
  getAllExperiences,
}

export default apis
