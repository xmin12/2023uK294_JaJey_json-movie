import { useNavigate, useParams } from "react-router-dom";
import MovieService from "../service/MovieService";
import React, { useEffect } from "react";
import Card from "@mui/material/Card/Card";
import Button from "@mui/material/Button/Button";
import { Create, Delete } from "@mui/icons-material";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = React.useState({
    id: "",
    movie_name: "",
    release_date: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id == undefined) {
      return;
    }
    MovieService.getMovieById(id)
      .then((response: any) => {
        setMovie(response);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div>
      <Card>
        <p>Id: {id}</p>
        <p>aName: {movie?.movie_name}</p>
        <p>release date: {movie?.release_date}</p>
      </Card>
      <div>
        <Button
          className="delete"
          variant="outlined"
          color="error"
          size="medium"
          onClick={() => {
            if (id == undefined) {
              return;
            }
            MovieService()
              .removeMovie(id)
              .then((response: any) => {
                navigate("/author");
              })
              .catch((error: any) => {});
          }}
        >
          <Delete />
          Delete
        </Button>
      </div>
      <div>
        <Button
          className="creat"
          variant="outlined"
          color="success"
          size="medium"
          onClick={() => {
            if (id == undefined) {
              return;
            }
            MovieService()
              .removeMovie(id)
              .then((response: any) => {
                navigate("/movies/create");
              })
              .catch((error: any) => {});
          }}
        >
          <Create />
          Creat
        </Button>
      </div>
      <div>
        <Button
          className="create"
          variant="outlined"
          color="success"
          size="medium"
          onClick={() => {
            if (id == undefined) {
              return;
            }
            navigate("/movies/update/" + id);
          }}
        >
          <Create />
          update
        </Button>
      </div>
    </div>
  );
}
