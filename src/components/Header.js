import { useState, useEffect } from "react";
import { NAV_LOGO } from "../utils/constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const [SearchBtnClick, setSearchBtnClick] = useState(false);
  const [searchText, setSearchText] = useState("");
  const favouriteItems = useSelector((store) => store.favourite.favs);
  // console.log(favouriteItems);
  const handleSearchBar = () => {
    setSearchBtnClick(!SearchBtnClick);
  };
  // const handleInput = (e) =>{
  //   console.log(e.target.value)
  //   setSearchText(e.target.value)
  // }
  return (
    <div className="navbar">
      <div className="left-side-navbar">
        <img src={NAV_LOGO} width="135"></img>
        <ul className="left-btn">
          <Link className="heading-links" to="/">
            <li>Home</li>
          </Link>
          <li>
            <div class="dropdown">
              <button class="dropbtn">Browse</button>
              <div class="dropdown-content">
                <div className="dd-left-side">
                  <Link to="#">Popular</Link>
                  <Link to="#">New</Link>
                  <Link to="#">Alphabetical</Link>
                  <Link to="#">Simulcast Season</Link>
                  <Link to="#">Release Calendar</Link>
                </div>
                <div className="dd-right-side">
                  <Link to="#">Action</Link>
                  <Link to="#">Adventure</Link>
                  <Link to="#">Comedy</Link>
                  <Link to="#">Drama</Link>
                  <Link to="#">Fantasy</Link>
                  <Link to="#">Music</Link>
                  <Link to="#">Romance</Link>
                  <Link to="#">Sci-Fi</Link>
                  <Link to="#">Shojo</Link>
                  <Link to="#">Sports</Link>
                </div>
              </div>
            </div>
          </li>
          <li>Manga</li>
        </ul>
      </div>
      <div className="right-side-navbar">
        <ul className="right-btn">
          <li>
            <Link to="/search">
              <button className="search-icon" onClick={handleSearchBar}>
                <img src="https://img.icons8.com/ios-glyphs/20/null/search--v1.png" />
              </button>
            </Link>
          </li>
          <li>User</li>
          <Link to="/favourites">
            <li>
              {" "}
              <div className="fav-tab">
                <img src="https://img.icons8.com/emoji/25/null/heart-suit.png" />
                {favouriteItems.length ? favouriteItems.length : null}
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
export default Header;
