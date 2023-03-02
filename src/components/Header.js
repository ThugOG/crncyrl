import { useState, useEffect } from "react";
import { NAV_LOGO } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleBtn } from "../utils/toggleSlice";
const Header = () => {
  const dispatch = useDispatch()
  const [SearchBtnClick, setSearchBtnClick] = useState(false);
  const [searchText, setSearchText] = useState("");
  const favouriteItems = useSelector((store) => store.favourite.favs);
  // console.log(favouriteItems);
  const handleSearchBar = () => {
    setSearchBtnClick(!SearchBtnClick);
  };
  const store = useSelector(store => store.toggle.isMenuOpen);
  // const handleInput = (e) =>{
  //   console.log(e.target.value)
  //   setSearchText(e.target.value)
  // }
  const handleClick = () =>{
    dispatch(toggleBtn())
    // console.log(store)
  }
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
              <button class="dropbtn" onClick={handleClick}>Browse</button>
              {(store)?<div class="dropdown-content">
                <div className="dd-left-side">
                  <Link to="/browse/popular">Popular</Link>
                  <Link to="/browse/new">New</Link>
                  <Link to="/browse/alphabetical">Alphabetical</Link>
                  <Link to="/browse/simulcast-season">Simulcast Season</Link>
                  <Link to="/browse/release-calendar">Release Calendar</Link>
                </div>
                <div className="dd-right-side">
                  <Link to="/genre/action">Action</Link>
                  <Link to="/genre/adventure">Adventure</Link>
                  <Link to="/genre/comedy">Comedy</Link>
                  <Link to="/genre/drama">Drama</Link>
                  <Link to="/genre/fantasy">Fantasy</Link>
                  <Link to="/genre/martial-arts">Fighting</Link>
                  <Link to="/genre/romance">Romance</Link>
                  <Link to="/genre/sci-fi">Sci-Fi</Link>
                  <Link to="/genre/shoujo">Shoujo</Link>
                  <Link to="/genre/sports">Sports</Link>
                </div>
              </div>:null}
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
