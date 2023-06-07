

import { useNavigate, useParams } from "react-router-dom";

import {useFormik } from "formik";
import MovieService from "../service/MovieService";

export default function MovieUpdate(){
    const{id}=useParams();
    const navigate = useNavigate();
 
const formik = useFormik({
    initialValues: {
        id: "",
      movie_name: "",
      release_date: "",
    },
    onSubmit: (values) => {
      handleSubmit(values.id,values.movie_name, values.release_date);
    console.log("here",values);
    },
  });
  const handleSubmit = (id:string,movie_name:string,release_date:string)=>{
    MovieService().updateMovie({id:id,movie_name:movie_name,release_date:release_date})
      .then((response: any) => {
        console.log("response",response)
        navigate("/movies/")
      })
      .catch((e: any) => {
        postMessage(e.response.data);
      });
    }
return(<form onSubmit={formik.handleSubmit}>
    <div>
      <h1>New Movie</h1>
      <label htmlFor="id">id</label>
      <input
        id="id"
        name="id"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.id}
      />
    </div>
    <div>
    <label htmlFor="movie_name">Name</label>
      <input
        id="movie_name"
        name="movie_name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.movie_name}
      />
    </div>
    <div>
      <label htmlFor="release_date">release date</label>
      <input
        id="release_date"
        name="release_date"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.release_date}
      />
    </div>
    <button type="submit">Submit</button>
  </form>
)
}