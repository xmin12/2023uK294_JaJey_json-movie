import React from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";


import { emit } from "process";

export default function Login2() {
const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      handleSubmit(values.email, values.password);
    },
  });
  const handleSubmit = (email:string,password:string)=>{
    LoginService().login({email,password})
      .then((response: any) => {
        console.log("response",response)
        localStorage.setItem("token", "Bearer " + response.data["accessToken"]);
        navigate("/author")
      })
      .catch((e: any) => {
        postMessage(e.response.data);
      });
    }
  
  
  return (<form onSubmit={formik.handleSubmit}>
    <div>
      <h1>Login</h1>
      {/* First Name */}
      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
    </div>
    <div>
      <label htmlFor="password">password</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
    </div>
    <button type="submit">Submit</button>
  </form>
);

}
