import React from "react";

import ShortVideoComp from "./ShortVideoComp";
import makeStyles from "../shorts/ShortVideoStyle";
import { data } from "../dummydata/Data";

function ShortVideo() {
  const classes = makeStyles();
  return (
    <div className={classes.shortVideos}>
      {data.map((item) => (
        <ShortVideoComp image={item.image} />
      ))}
    </div>
  );
}

export default ShortVideo;
