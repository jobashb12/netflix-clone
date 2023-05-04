import React, { useEffect, useState } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, original }) => {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
      return res;
    }
    fetchData();
  }, [fetchUrl]);

  let baseURL = "https://image.tmdb.org/t/p/original/";

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleTrailer = name => {
    if (trailer) {
      setTrailer("");
    } else {
      movieTrailer(name)
        .then(res => {
          const params = new URL(res).searchParams;
          setTrailer(params.get("v"));
        })
        .catch(e => {
          console.log("Error is: ", e);
        });
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className={`row-poster ${original && "original"}`}>
        {movies.map(movie => {
          return (
            <img
              key={movie.id}
              src={`${baseURL}${movie.backdrop_path}`}
              onClick={() => handleTrailer(movie.name || movie.title)}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailer && <YouTube opts={opts} videoId={trailer} />}
    </div>
  );
};

export default Row;
