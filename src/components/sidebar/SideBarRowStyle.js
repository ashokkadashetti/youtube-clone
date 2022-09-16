import { makeStyles } from "@mui/styles";

export default makeStyles({
  sideBarRow: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
  },
  sideBarRowIcon: {
    color: "gray",
    fontSize: "x-large !important",
  },
  sideBarRowTitle: {
    flex: 1,
    marginLeft: 20,
    fontSize: 17,
    fontWeight: 400,
  },
  sideBarRowTitleLink: {
    color: "rgb(28, 27, 27)",
    fontSize: "x-large !important",
    fontWeight: 400,
    textDecoration: "none",
    "& :hover": {
      backgroundColor: "lightgray",
      cursor: "pointer",
    },
  },
});
