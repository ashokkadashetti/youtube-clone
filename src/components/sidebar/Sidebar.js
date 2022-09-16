import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import ShowChartOutlinedIcon from "@material-ui/icons/ShowChartOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import LocalMoviesOutlinedIcon from "@material-ui/icons/LocalMoviesOutlined";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";
import LiveTvOutlinedIcon from "@material-ui/icons/LiveTvOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MovieCreationIcon from "@material-ui/icons/MovieCreation";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import FaceIcon from "@material-ui/icons/Face";
import TvIcon from "@material-ui/icons/Tv";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@material-ui/icons/FeedbackOutlined";
import { Typography } from "@material-ui/core";

import SideBarRow from "./SideBarRow";
import makeStyles from "../sidebar/SideBarStyle";

const sideBarObj = [
  {
    id: 1,
    color: "disabled",
    title: "Home",
    icon: HomeOutlinedIcon,
  },
  {
    id: 2,
    color: "disabled",
    title: "Explore",
    icon: ExploreOutlinedIcon,
  },
  {
    id: 3,
    color: "disabled",
    title: "Shorts",
    icon: ShowChartOutlinedIcon,
  },
  {
    id: 4,
    color: "disabled",
    title: "Subscriptions",
    icon: SubscriptionsOutlinedIcon,
  },
];

const sideBarObjOne = [
  {
    id: 1,
    color: "disabled",
    title: "Library",
    icon: VideoLibraryOutlinedIcon,
  },
  {
    id: 2,
    color: "disabled",
    title: "History",
    icon: HistoryOutlinedIcon,
  },
  {
    id: 3,
    color: "disabled",
    title: "Watch later",
    icon: WatchLaterOutlinedIcon,
  },
  {
    id: 4,
    color: "disabled",
    title: "Ruby Class",
    icon: BookmarkBorderOutlinedIcon,
  },
  {
    id: 5,
    color: "disabled",
    title: "Liked videos",
    icon: ThumbUpAltOutlinedIcon,
  },
];

const sideBarObjTwo = [
  {
    id: 1,
    color: "disabled",
    title: "Movies",
    icon: LocalMoviesOutlinedIcon,
  },
  {
    id: 2,
    color: "disabled",
    title: "Gaming",
    icon: SportsEsportsOutlinedIcon,
  },
  {
    id: 3,
    color: "disabled",
    title: "Live",
    icon: LiveTvOutlinedIcon,
  },
  {
    id: 4,
    color: "disabled",
    title: "Fashion & Beauty",
    icon: CardGiftcardOutlinedIcon,
  },
  {
    id: 5,
    color: "disabled",
    title: "Learning",
    icon: EmojiObjectsOutlinedIcon,
  },
  {
    id: 6,
    color: "disabled",
    title: "Sports",
    icon: SportsKabaddiIcon,
  },
];

const sideBarObjThree = [
  {
    id: 1,
    color: "red",
    title: "YouTube Premium",
    icon: YouTubeIcon,
  },
  {
    id: 2,
    color: "red",
    title: "Creator Studio",
    icon: MovieCreationIcon,
  },
  {
    id: 3,
    color: "red",
    title: "YouTube Music",
    icon: PlayCircleOutlineIcon,
  },
  {
    id: 4,
    color: "red",
    title: "YouTube Kids",
    icon: FaceIcon,
  },
  {
    id: 5,
    color: "red",
    title: "YouTube TV",
    icon: TvIcon,
  },
];

const sideBarObjFour = [
  {
    id: 1,
    color: "disabled",
    title: "Settings",
    icon: SettingsOutlinedIcon,
  },
  {
    id: 2,
    color: "disabled",
    title: "Report history",
    icon: FlagOutlinedIcon,
  },
  {
    id: 3,
    color: "disabled",
    title: "Help",
    icon: HelpOutlineOutlinedIcon,
  },
  {
    id: 4,
    color: "disabled",
    title: "Send feedback",
    icon: FeedbackOutlinedIcon,
  },
];

function Sidebar() {
  const classes = makeStyles();
  return (
    <div className={classes.sideBar}>
      {sideBarObj.map((data) => (
        <SideBarRow
          key={data.id}
          color={data.color}
          Icon={data.icon}
          title={data.title}
        />
      ))}
      <hr />
      {sideBarObjOne.map((data) => (
        <SideBarRow
          key={data.id}
          color={data.color}
          Icon={data.icon}
          title={data.title}
        />
      ))}
      <hr />
      <Typography className={classes.sideBarH2} variant="h6">
        Subscriptions
      </Typography>
      <SideBarRow
        color="disabled"
        Icon={AddCircleOutlineOutlinedIcon}
        title="Browse channels"
      />
      <hr />
      <Typography className={classes.sideBarH2} variant="h6">
        Explore
      </Typography>
      {sideBarObjTwo.map((data) => (
        <SideBarRow
          key={data.id}
          color={data.color}
          Icon={data.icon}
          title={data.title}
        />
      ))}
      <hr />
      <Typography className={classes.sideBarH2} variant="h6">
        More from YouTube
      </Typography>
      {sideBarObjThree.map((data) => (
        <SideBarRow
          key={data.id}
          color={data.color}
          Icon={data.icon}
          title={data.title}
        />
      ))}
      <hr />
      {sideBarObjFour.map((data) => (
        <SideBarRow
          key={data.id}
          color={data.color}
          Icon={data.icon}
          title={data.title}
        />
      ))}
      <hr />
      <Typography className={classes.sideBarP} variant="body2">
        About Press Copyright Contact us Creators Advertise Developers
      </Typography>
      <Typography className={classes.sideBarP} variant="body2">
        TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
      </Typography>
      <Typography className={classes.sideBarP} variant="h6">
        © 2022 Google LLC
      </Typography>
    </div>
  );
}

export default Sidebar;
