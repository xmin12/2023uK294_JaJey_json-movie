import axios from 'axios';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



function Login() {
    interface Test {
        email: string;
        pass: string;
    }

    const handleSubmit = () => {

        const data = {

            email: "nithu@mail.com",
            password: "1313"
        
        };

        console.log(data)
        const ax = axios.create();
        ax.post("http://localhost:3030/login",data)
            .then(response => {
                console.log(response)
                console.log(response.data.accessToken)
                localStorage.setItem("token", response.data.accessToken);
      window.location.href = 'http://localhost:3030/movies' 
    }) 
     .catch(err => console.log(err));
    }; return (
        <div>
            <form>
                <label>
                    Email:&nbsp;&emsp;&emsp;&nbsp;&nbsp;<input type="email" name="email" />
                </label>
                <br />
                <label>
                    Password:&emsp;<input type="password" name="password" />
                </label>
                <br />
                <label>
                &emsp;&emsp;&nbsp;&emsp; &emsp; &emsp; &emsp;
                    <Button variant="contained" endIcon={<SendIcon />} onClick= {handleSubmit}> 
                Send </Button>
                </label>
            </form>
        </div>  
        );
}
export default Login;