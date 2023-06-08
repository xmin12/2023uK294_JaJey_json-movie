
import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

export type loginRequest = {
    email: string,
    password: string;
}

const LoginService = (api: AxiosInstance = defaultAxiosInstance) => ({

    login: async (param:loginRequest) => {

        console.log("login request.");

        const answer = await api.post("login", param);

        console.log(answer.data.accessToken)

        localStorage.setItem("token", answer.data.accessToken);

        return answer;

    },

    logout: () => clearAuthTokens()

})

  

function clearAuthTokens() {
    throw new Error("Function not implemented.");
}
  

export default LoginService;