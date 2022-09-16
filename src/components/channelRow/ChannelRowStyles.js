import { makeStyles } from "@mui/styles";

export default makeStyles({
  channelRow: {
    display: "flex",
    alignItems: "center",
  },
  channelRowText: {
    width: 500,
    display: "flex",
    flexDirection: "column",
  },
  channelRowTextP: {
    marginTop: 5,
    color: "#606060",
  },
  channelRowLogo: {
    height: "150px !important",
    width: "150px !important",
    margin: "10px 120px",
  },
  channelRowTextH4: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 16,
    fontWeight: "bold",
  },
  channelRowButton: {
    marginLeft: 485,
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    height: 30,
    width: 100,
  },
});
