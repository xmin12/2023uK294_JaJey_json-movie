// MovieList component

import { Button, Card } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieService from "../service/MovieService";
import { MovieType } from "../service/MoviesProp";
import { Movie } from "@mui/icons-material";

export default function MovieList() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    MovieService()
      .getAllMovie()
      .then((response) => {
        const limitedMovies = response.slice(0, 9);
        setMovies(limitedMovies);
      });
  }, []);

  const cardStyle = {
    bgcolor: "#fff4fc",
    display: "block",
    transitionDuration: "0.3s",
    height: "22vw",
    width: "25vw",
    justifyContent: "center",
  };

  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate("/movies/" + id);
  };


  const handleCreateMovie = () => {
    navigate("/movies/create");
  }

  return (
    <div>
      <header style={{ backgroundColor: "#f2f2f2", padding: "10px", textAlign: "center" }}>
        <h1>Movie List</h1>
      </header>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {movies.map((item, index) => (
          <div key={index} style={{ margin: "10px" }}>
            <Card style={cardStyle}>
              {item.Title}
              <Button size="medium" className="detailsButton" onClick={() => handleClick(item.id.toString())}>
                Details
              </Button>
            </Card>
          </div>
        ))}
      </div>
      <Button variant="contained" color="primary" onClick={handleCreateMovie}>
        Create New Movie
      </Button>
    </div>
  );
}
