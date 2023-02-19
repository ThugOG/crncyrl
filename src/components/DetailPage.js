import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DETAIL_AM_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addFavourite } from "../utils/favouriteSlice";
const DetailPage = () => {
    const dispatch = useDispatch();
  const [animeDetails, setAnimeDetails] = useState([]);
  const [episodes, setEpisodes] = useState([])
  const { name } = useParams();
  const getAnimeInfo = async () => {
    const data = await fetch(DETAIL_AM_URL + name);
    const json = await data?.json();
    console.log(json);
    setAnimeDetails(json);
    setEpisodes(json.episodesList)
  };
  useEffect(() => {
    getAnimeInfo();
  }, []);
  const handleAddFavourite = () => {
    const {animeTitle, animeImg, releasedDate, status, totalEpisodes} = animeDetails
    dispatch(addFavourite({animeTitle, animeImg, releasedDate, status, totalEpisodes}))
  }
  return (
    <div className="detail-main-body">
      <div className="upper-detail-part">
        <img src={animeDetails?.animeImg}></img>
        <div className="anime-details-right">
          <h1>{animeDetails?.animeTitle}</h1>
          <p>Type: {animeDetails?.type}</p>
          <p>Genres: {animeDetails?.genres?.join(", ")}</p>
          <p>Release Date: {animeDetails?.releasedDate}</p>
          <p>Status: {animeDetails?.status}</p>
          <p>Total Episodes: {animeDetails?.totalEpisodes}</p>
          <button onClick={handleAddFavourite}>Add to Favourites</button>
        </div>
      </div>
      <h2>Synopsis:</h2>
      <div className="lower-detail-part">{animeDetails?.synopsis}</div>
      <h2 className="episode-heading">Episodes Based on Recency : </h2>
      <div className="episodes-body">
            {
                episodes.map((single)=>{
                    return (
                        <div className="episode-card"><p>{animeDetails.animeTitle}-{single.episodeNum}</p><span><a href={single.episodeUrl}>CLICK HERE</a></span></div>
                    )
                })
            }
      </div>
    </div>
  );
};
export default DetailPage;
