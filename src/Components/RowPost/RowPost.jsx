import React, { useEffect, useState } from "react";
import Axios from "../../Axios";
import { imgURL, API_KEY } from "../../Constants/Constants";
import YouTube from "react-youtube";
import "./RowPost.css";

function RowPost({ title, url, isLarge }) {
  //STATES
  const [movies, setMovies] =  useState([]);
  const [urlId, setUrlId] = useState("");

  //USE EFFECT
  useEffect(() => {
    Axios.get(url).then((response) => {
      setMovies(response.data.results);
    });
  }, [url]);

  //FUNCTIONS
  const handleMovieId = (movieId) => {
    if (urlId) {
      setUrlId("");
    } else {
      Axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          setUrlId(response.data.results[0]);
        })
        .catch((error) => console.log(error));
    }
  };

  //OBJECTS
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 1,
      disablekb: 0,
    },
  };

  return (
    <div className="row">
      <h1 className="title">{title}</h1>
      <div className="posters">
        {movies.map((obj) => (
          <img
            className={isLarge ? "largePoster" : "poster"}
            src={`${imgURL + obj.poster_path}`}
            alt={obj.movie}
            onClick={() => handleMovieId(obj.id)}
            key={obj.id}
          />
        ))}
      </div>

      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
