import React from "react";
import { Avatar, Typography } from "@material-ui/core";

import makeStyle from "../videoCard/VideoCardCss";

function VideoCard({ image, title, channel, views, timeStamp, channelImg }) {
  const classes = makeStyle();
  return (
    <div className={classes.videoCard}>
      <img className={classes.videoCardTumbnail} src={image} />
      <div className={classes.videoCardInfo}>
        <Avatar
          className={classes.videoCardAvatar}
          alt={channel}
          src={channelImg}
        />
        <div className={classes.videoCardText}>
          <Typography style={{fontSize: 14}} className={classes.videoCardTextH4} variant="h6">
            {title}
          </Typography>
          <Typography
            className={classes.videoCardTextP}
            variant="body2"
            display="block"
          >
            {views}
          </Typography>
          <Typography
            className={classes.videoCardTextP}
            variant="body2"
            display="block"
          >
            {channel} - {timeStamp}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
