import React, { useEffect, useRef } from "react";
import cards_data from "./../../assets/cards/Cards_data";
import "./TitleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = React.useState([]);
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
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", (e) => {
      e.preventDefault();
      cardsRef.current.scrollLeft += e.deltaY;
    });
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} key={index} className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
                alt={card.title}
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
