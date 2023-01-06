import axios from "axios";

const api = axios.create({
   baseURL: "https://stella-chatbot.herokuapp.com"
})

export default api