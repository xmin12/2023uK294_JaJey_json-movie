import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MovieService from "../service/MovieService";
import {MovieType} from "../service/MoviesProp";



const MovieUpdate = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      return;
    }

    MovieService().getMovieById(id)
      .then((moviedata) => setMovie(moviedata))
      .catch((error) => console.log(error));
  }, [id]);

  const handleSubmit = (movie: MovieType) => {
    MovieService()
      .updateMovie(Number(id), movie)
      .then((response) => {
        console.log("response", response);
        navigate("/movies");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      id: 0,
  
      Title: movie ? movie.Title : "",
      ['Release Date']: movie ? movie["Release Date"] : "",

    },
    onSubmit: (values) => {
      handleSubmit(values);
      console.log("here", values);
    },
    enableReinitialize: true

  });

  return (
    <form onSubmit={formik.handleSubmit}>
     <h1>Update Movie</h1>
      <div>
        <label htmlFor="Title">Name</label>
        <input
          id="Title"
          name="Title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Title}
        />
      </div>
      <div>
        <label htmlFor="Release Date">release date</label>
        <input
          id="Release Date"
          name="Release Date"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values['Release Date']}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MovieUpdate;

