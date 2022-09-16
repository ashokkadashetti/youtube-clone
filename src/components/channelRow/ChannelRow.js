import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlined";
import { Typography } from "@material-ui/core";

import makeStyles from "../channelRow/ChannelRowStyles";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  verified,
  description,
}) {
  const classes = makeStyles();
  return (
    <div className={classes.channelRow}>
      <Avatar className={classes.channelRowLogo} alt={channel} src={image} />
      <div className={classes.channelRowText}>
        <Typography className={classes.channelRowTextH4} variant="h6">
          {channel} {verified && <VerifiedIcon />}
        </Typography>
        <Typography className={classes.channelRowTextP} variant="body1">
          {subs} subscribers - {noOfVideos} videos
        </Typography>
        <Typography className={classes.channelRowTextP} variant="body1">
          {description}
        </Typography>
      </div>
      <button className={classes.channelRowButton}>SUBSCRIBE</button>
    </div>
  );
}

export default ChannelRow;
