import React from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import ScreenShareOutlinedIcon from "@material-ui/icons/ScreenShareOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

import makeStyles from "../shorts/ShortVideoStyle";

function ShortVideoComp({image}) {
  const classes = makeStyles();
  return (
    <div className={classes.shortVideosInfo}>
      <div className={classes.shortVideosLogo}>
        <img
          className={classes.shortVideosLogoImg}
          src={image}
        />
      </div>
      <div className={classes.shortVideosIcons}>
        <div className={classes.shortVideosIconList}>
          <div className={classes.shortVideosIcn}>
            <ThumbUpAltIcon style={{ fontSize: 40 }} />
            <p>20k</p>
          </div>
          <div className={classes.shortVideosIcn}>
            <ThumbDownIcon style={{ fontSize: 40 }} />
            <p>Dislike</p>
          </div>
          <div className={classes.shortVideosIcn}>
            <CommentOutlinedIcon style={{ fontSize: 40 }} />
            <p>1.3k</p>
          </div>
          <div className={classes.shortVideosIcn}>
            <ScreenShareOutlinedIcon style={{ fontSize: 40 }} />
            <p>Share</p>
          </div>
          <div className={classes.shortVideosIcn}>
            <MoreHorizOutlinedIcon style={{ fontSize: 40 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortVideoComp;
