import { useState, useEffect } from "react";
import SearchCard from "./SearchCard";
import Shimmer from "./Shimmer";
const Search = () => {
  const [animeData, setAnimeData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleInput = (e) => {
    setSearchText(e.target.value);
  };
  const getSearchDetail = async () => {
    const data = await fetch(
      "https://gogoanime.consumet.stream/search?keyw=" + searchText
    );
    const json = await data.json();
    // console.log(json)
    setAnimeData(json);
  };
  useEffect(() => {
    getSearchDetail();
  }, [searchText]);
  return (
    <>
      <div className="search-comp">
        <input
          type="text"
          value={searchText}
          onChange={handleInput}
          placeholder="Search...."
        ></input>
      </div>
      {animeData.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="search-page-body">
          {animeData.map((single) => {
            return <SearchCard {...single} />;
          })}
        </div>
      )}
    </>
  );
};
export default Search;
