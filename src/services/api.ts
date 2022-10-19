import axios from "axios";

const api = axios.create({
   baseURL: "https://autou-chatbot-backend.herokuapp.com/"
})

export default api