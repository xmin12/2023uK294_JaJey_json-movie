import axios,{AxiosInstance} from "axios";


const BASE_URL = 'http://localhost:3030/';
export const defaultAxiosInstatnstace: AxiosInstance = axios.create({
    baseURL : BASE_URL,
})

defaultAxiosInstatnstace.interceptors.request.use(
    (request)=> {
        const token = localStorage.getItem("token");
        console.log(token)
        if(token&& request.headers){ request.headers.Authorization = token;}
        return request;  
        },
(error)=> {
    return Promise.reject(error);
}

        
)