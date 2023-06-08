import { useFormik } from "formik";
import MovieService from "../service/MovieService";
import { useNavigate, useParams } from "react-router-dom";


export default function MovieCreate(){
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const{id}=useParams();
    const navigate = useNavigate();
 
const formik = useFormik({
    initialValues: {
      movie_name: "",
      release_date: "",
    },
    onSubmit: (values) => {
      handleSubmit(values.movie_name, values.release_date);
    console.log("here",values);
    },
  });
  const handleSubmit = (movie_name: string, release_date: string) => {
    MovieService().createMovie({movie_name, release_date })
      .then((response) => {
        console.log("response", response);
        navigate("/movies");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <h1>New Movie</h1>
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
  );
}