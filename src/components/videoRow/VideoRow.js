import React from "react";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import makeStyles from "../videoRow/VideoRowCss";

function VideoRow({ views, description, channel, title, timestamp, image }) {
  const classes = makeStyles();
  return (
    <div className={classes.videoRow}>
      <img className={classes.videoRowImg} src={image} alt="" />
      <div className={classes.videoRowText}>
        <Typography className={classes.videoRowTitle} variant="h6">
          {title}
        </Typography>
        <Typography className={classes.videoRowHeadLine} variant="body1">
          {views} - {timestamp}
        </Typography>
        <Typography className={classes.videoRowChannel} variant="body1">
          <Avatar className={classes.videoRowLogo} src={image} />
          {channel}
        </Typography>
        <Typography className={classes.videoRowDescription} variant="body1">
          {description}
        </Typography>
      </div>
    </div>
  );
}

export default VideoRow;
