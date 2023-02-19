import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeSelection } from "../utils/favouriteSlice";
const Favourites = () => {
  const favItems = useSelector((store) => store.favourite.favs);
  const dispatch = useDispatch();
  const handleClearSelection = () => {
    dispatch(removeSelection(1))
  };    
  return (favItems.length === 0) ? <h1 className="fav-tab-heading">Nothing to Show.....</h1> : (
    <>
      <div className="fav-tab-body">
        <h1>WishList: </h1>
        {favItems.map((singleItem) => (
          <div className="fav-tab-card">
            <img src={singleItem.animeImg}></img>
            <p>{singleItem.animeTitle}</p>
            <p>Released Date: {singleItem.releasedDate}</p>
            <p>Status: {singleItem.status}</p>
            <p>Total Episodes: {singleItem.totalEpisodes}</p>
            <button onClick={handleClearSelection} className="fav-clear-btn">
              Clear
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Favourites;
