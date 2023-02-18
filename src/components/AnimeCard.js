import { useDispatch } from "react-redux";
import { addFavourite } from "../utils/favouriteSlice";
const AnimeCard = ({ animeTitle, animeImg, releasedDate }) => {
  const dispatch = useDispatch();

  const handleFavlist = () => {
    dispatch(addFavourite({ animeTitle, animeImg, releasedDate }));
  };
  return (
    <div className="single-anime-card">
      <div>
        <img className="anime-image" src={animeImg}></img>
        <p>{animeTitle}</p>
        <p>Released Date: {releasedDate}</p>
      </div>
      <button className="fav-btn" onClick={handleFavlist}>
        Add to Favourite
      </button>
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
