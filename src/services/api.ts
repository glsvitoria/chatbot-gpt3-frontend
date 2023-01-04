import axios from "axios";

const api = axios.create({
   baseURL: "https://chatbot-hub.onrender.com/predict_stellantis/"
})

export default api