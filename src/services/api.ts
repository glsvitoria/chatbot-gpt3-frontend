import axios from "axios";

const api = axios.create({
   baseURL: "https://chatbot-hub.onrender.com"
})

export default api