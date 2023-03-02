import { Link } from "react-router-dom";
import { addFavourite } from "../utils/favouriteSlice";
import { useDispatch } from "react-redux";
const AnimeCard = ({ animeId, animeTitle, animeImg, releasedDate }) => {
  const dispatch = useDispatch();
  const handlefav = () => {
    dispatch(addFavourite({ animeId, animeTitle, animeImg, releasedDate }))
  }

  return (
    <div className="single-anime-card">
      <div>
        <img className="anime-image" src={animeImg}></img>
        <p>{animeTitle}</p>
        <p>Released Date: {releasedDate}</p>
      </div>
      {/* <div className="card-btn"> */}
        <Link to={"/getDetails/" + animeId}>
          <button className="fav-btn">Know More</button>
        </Link>
        {/* <button onClick={handlefav} className="fav-btn-card">
          <img
            className="fav-btn-card"
            src="https://img.icons8.com/emoji/25/null/heart-suit.png"
          />
        </button> */}
      {/* </div> */}
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
