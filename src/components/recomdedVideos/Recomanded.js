import React from "react";

import VideoCard from "../videoCard/VideoCard";
import { data } from "../dummydata/Data";
import makeStyles from "../recomdedVideos/RecomandedCompStyles";

function Recomanded() {
  const classes = makeStyles();
  return (
    <div className={classes.recomanded}>
      <div className={classes.recomandedVideos}>
        {data.map((item) => (
          <VideoCard
            key={item.id}
            image={item.image}
            title={item.title}
            channel={item.channel}
            views={item.views}
            timeStamp={item.timeStamp}
            channelImg={item.channelImg}
          />
        ))}
      </div>
    </div>
  );
}

export default Recomanded;
