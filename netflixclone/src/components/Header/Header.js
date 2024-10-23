import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/to.jpeg";
import { Search, Notifications, AccountBox, ArrowDropDown } from "@mui/icons-material";
const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li><img src='{NetflixLogo}' alt='NetflixLogo' /></li>
            {/* <li>Netflix</li> */}
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by language</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li><Search /></li>
            <li><Notifications/></li>
            <li><AccountBox/></li>
            <li><ArrowDropDown/></li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
