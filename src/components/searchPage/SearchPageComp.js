import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

import ChannelRow from "../channelRow/ChannelRow";
import VideoRow from "../videoRow/VideoRow";
import { data } from "../dummydata/Data";
import { Typography } from "@material-ui/core";
import makeStyles from "../searchPage/SearchPageStyle";

function SearchPageComp({ inputValue }) {
  const classes = makeStyles();

  const filterdData = data.filter((data) =>
    data.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className={classes.searchPage}>
      <div className={classes.searchPageFilter}>
        <TuneOutlinedIcon />
        <Typography variant="h6"> FILTERS</Typography>
      </div>
      <hr className={classes.searchPageHr} />

      <ChannelRow
        image="https://picsum.photos/200"
        channel="My channel"
        verified
        subs="80k"
        noOfVideos={500}
        description="This page is related to serach page channel row"
      />
      <hr className={classes.searchPageHr} />
      {filterdData.map((item) => (
        <VideoRow
          key={item.id}
          image={item.image}
          channel={item.channel}
          subs={item.subs}
          views={item.views}
          timestamp={item.timeStamp}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default SearchPageComp;
