import { useState } from "react";
import { NAV_LOGO } from "../utils/constants";
import { useSelector } from "react-redux";
const Header = () => {
    const [SearchBtnClick, setSearchBtnClick] = useState(false)
    const favouriteItems = useSelector(store=>store.favourite.favs)
    console.log(favouriteItems)
    const handleSearchBar = () =>{
        setSearchBtnClick(!SearchBtnClick)
    }
  return (
    <div className="navbar">
      <div className="left-side-navbar">
        <img src={NAV_LOGO} width="135"></img>
          <ul className="left-btn">
            <li>Browse</li>
            <li>Manga</li>
            <li>Games</li>
            <li>News</li>
          </ul>
      </div>
      <div className="right-side-navbar">
        <ul className="right-btn">
          <li>
            <button  className="search-icon"  onClick={handleSearchBar}><img src="https://img.icons8.com/ios-glyphs/20/null/search--v1.png"/></button>
            {(SearchBtnClick)?<input className="search-box"type="text" />:null}
          </li>
          <li>Bookmark</li>
          <li>User</li>
          <li> <div className="fav-tab"><img src="https://img.icons8.com/emoji/25/null/heart-suit.png"/>{favouriteItems.length? favouriteItems.length : null}</div></li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
