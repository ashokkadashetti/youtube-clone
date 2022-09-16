import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MicIcon from "@material-ui/icons/Mic";
import { Link } from "react-router-dom";

import makeStyles from "../header/HeaderStyle";

function Header({ getInputFromHeader }) {
  const classes = makeStyles();
  const [inputSearch, setInputSearch] = useState("");

  const handleOnSearchClick = () => {
    getInputFromHeader(inputSearch);
  };

  return (
    <div className={classes.header}>
      <div>
        <MenuIcon />
        <Link to="/">
          <img
            className={classes.headerLogo}
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          />
        </Link>
      </div>
      <div className={classes.headerInputOne}>
        <div className={classes.headerInput}>
          <input
            className={classes.headerInputBox}
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
            type="text"
            placeholder="Search"
          />
          <Link onClick={handleOnSearchClick} to={`search/${inputSearch}`}>
            <SearchIcon className={classes.headerInputButton} />
          </Link>
        </div>
        <div className={classes.headerIconSearch}>
          <MicIcon />
        </div>
      </div>
      <div className={classes.headerIcons}>
        <VideoCallIcon className={classes.headerIcon} />
        <NotificationsIcon className={classes.headerIcon} />
        <AccountCircleIcon className={classes.headerIcon} />
      </div>
    </div>
  );
}

export default Header;
