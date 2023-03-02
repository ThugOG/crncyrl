import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeSelection } from "../utils/favouriteSlice";
import {Link } from 'react-router-dom'
const Favourites = () => {
  const favItems = useSelector((store) => store.favourite.favs);
  const dispatch = useDispatch();
  const handleClearSelection = (id) => {
    dispatch(removeSelection(id));
  };
  return favItems.length === 0 ? (
    <h1 className="fav-tab-heading">Nothing to Show.....</h1>
  ) : (
    <>
      <p className="fav-heading">WishList </p>
      <div className="fav-tab-body">
        {favItems.map((singleItem) => (
          <div className="fav-tab-card">
            <img src={singleItem?.animeImg}></img>
            <p>{singleItem?.animeTitle}</p>
            <p>Released Date: {singleItem?.releasedDate}</p>
            <p>Status: {singleItem?.status}</p>
            <p>Total Episodes: {singleItem?.totalEpisodes}</p>
            <div className="fav-card-btn">
              <button
                onClick={() => {
                  handleClearSelection(singleItem.animeTitle);
                }}
                className="fav-clear-btn"
              >
                Clear
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Favourites;
