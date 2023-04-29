import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/'
});

export default api

export const getFoods = async () => {
  const response = await api.get('/foods');
  return response.data
}
