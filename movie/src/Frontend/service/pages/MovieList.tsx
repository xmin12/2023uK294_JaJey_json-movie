import { Button, Grid, TextField } from "@mui/material";
import { Card } from "@mui/material";
import { AxiosInstance } from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { moveEmitHelpers } from "typescript";
import { defaultAxiosInstatnstace } from "../Api";
import AuthorService, { Author } from "../service/MovieService";

export default function Authorlist() {
  const [authorName, setAuthorName] = useState<Author[]>([]);
  useEffect(() => {
    AuthorService()
      .getAllAuthors()
      .then((response) => setAuthorName(response));
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
    navigate("/author/" + id);
  };

  return (
    <div>
      {authorName.map((item, index) => {
        return (
          <div>
            <Card style={cardStyle}>{item.author_name}
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
