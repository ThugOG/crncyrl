import { useDispatch } from "react-redux";
import { addFavourite } from "../utils/favouriteSlice";
import {Link } from 'react-router-dom'
const AnimeCard = ({animeId, animeTitle, animeImg, releasedDate }) => {
  return (
    <div className="single-anime-card">
      <div>
        <img className="anime-image" src={animeImg}></img>
        <p>{animeTitle}</p>
        <p>Released Date: {releasedDate}</p>
      </div>
      <Link to={"/getDetails/"+animeId}><button className="fav-btn">
        Know More
      </button></Link>
    </div>
  );
};
export default AnimeCard;

/*
animeId
: 
"blue-lock"
animeImg
: 
"https://gogocdn.net/cover/blue-lock-1664387634.png"
animeTitle
: 
"Blue Lock"
episodeId
: 
"blue-lock-episode-19"
episodeNum
: 
"19"
episodeUrl
: 
"https://gogoanime.film///blue-lock-episode-19"
subOrDub
: 
"SUB"

*/
