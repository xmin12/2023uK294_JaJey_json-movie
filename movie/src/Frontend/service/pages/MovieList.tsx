import { Button, Card } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieService, { Movie } from "../service/MovieService";


export default function MovieList() {
  const [MovieName, setMovieName] = useState<Movie[]>([]);
  useEffect(() => {
    MovieService()
      .getAllMovie()
      .then((response) => setMovieName(response));
  }, []);
  const cardStyle = {
    bgcolor: "#fff4fc",

    display: "block",

    transitionDuration: "0.3s",

    height: "22vw",

    width: "25vw",
    justifyContent: "center",
  };
  const navigate= useNavigate();
  const handleClick = (id: string) => {
    navigate("/movies/" + id);
  };

  return (
    <div>
      {MovieName.map((item, index) => {
        return (
          <div>
            <Card style={cardStyle}>{item.movie_name}
            <Button size="medium" className="detailsButton" onClick={()=>handleClick(item.id)}>
            Details
          </Button>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
