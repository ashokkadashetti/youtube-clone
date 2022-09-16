import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import makeStyles from "../sidebar/SideBarRowStyle";

function SideBarRow({ color, Icon, title }) {
  const classes = makeStyles();
  return (
    <div className={classes.sideBarRow}>
      <Icon style={{ color: color }} className={classes.sideBarRowIcon} />
      <Link className={classes.sideBarRowTitleLink} to={`/${title}`}>
        <Typography className={classes.sideBarRowTitle} variant='h6'>
          {title}
        </Typography>
      </Link>
    </div>
  );
}

export default SideBarRow;
