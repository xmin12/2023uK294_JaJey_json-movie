import { useFormik } from "formik";
import MovieService from "../service/MovieService";
import { useNavigate, useParams } from "react-router-dom";
import { MovieType } from "../service/MoviesProp";

export default function MovieCreate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      Title: "",
      ["Release Date"]: "",

    },
    onSubmit: (values) => {
      handleSubmit(values.Title, values['Release Date']);
      console.log("here", values);
    },
  });

  const handleSubmit = (Title: string, release_date: string) => {
    MovieService().createMovie({ Title, ["Release Date"]: release_date, id: 0 })
      .then((response) => {
        console.log("response", response);
        navigate("/movies");
      })
      .catch((error) => {
        console.error(error);
      });
    }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <h1>New Movie</h1>
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
          value={formik.values["Release Date"]}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
