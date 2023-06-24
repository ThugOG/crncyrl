import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import AnimeCard from "./AnimeCard";
const Genre = () => {
  const { type } = useParams();
  const [genreAnime, setGenreAnime] = useState([]);
  const getGenreAnime = async () => {
    try {
      const data = await fetch(
        "https://webdis-4d5t.onrender.com/genre/" + type
      );
      const json = await data.json();
      setGenreAnime(json);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(genreAnime)
    getGenreAnime();
  },[type]);
  return genreAnime.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-page-body">
      {/* <button onClick={show}>Show</button> */}
      {genreAnime.map((single, index) => {
        return <AnimeCard {...single} key={index} />;
      })}
    </div>
  );
};
export default Genre;
