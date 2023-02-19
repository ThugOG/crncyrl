import {Link} from 'react-router-dom'
const SearchCard = ({ animeId, animeTitle, animeImg, status }) => {
  //   console.log(animeId, animeTitle, animeImg, status);
  return (
    <div className="search-card">
      <img src={animeImg}></img>
      <p>{animeTitle}</p>
      <p>{status}</p>
      <Link to={"/getDetails/"+animeId}><button>Know More</button></Link>
    </div>
  );
};
export default SearchCard;
