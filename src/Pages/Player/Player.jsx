import React, { useEffect } from "react";
import "./Player.css";
import { useState } from "react";
import back_arrow from "./../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzE0YmJlMWJkNjBlMTk3NTQxNDgzNTA5MDhjMDg5MiIsIm5iZiI6MTczNzUyMDU3NS4zMjcwMDAxLCJzdWIiOiI2NzkwNzViZjdlY2E3YjRhMGQ3NzQ2YWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.brhbWRISxvfIG_aVBJMiW5kDpCGM5SpoXjQmF1KWOUI",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img
        src={back_arrow}
        alt="back arrow button"
        onClick={() => navigate(-2)}
      />
      {apiData.key ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="trailer"
          frameBorder={0}
          allowFullScreen
        ></iframe>
      ) : (
        <p>No video available</p>
      )}
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
