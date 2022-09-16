import { makeStyles } from "@mui/styles";

export default makeStyles({
  recomanded: {
    flex: 0.8,
    backgroundColor: "#f9f9f9",
    padding: "0px, 20px",
    paddingBottom: 0,
    overflow: "scroll",
    marginTop: 60,
    marginLeft: 20,
  },

  recomandedVideos: {
    display: "flex",
    flexWrap: "wrap",
    "& :hover": {
      cursor: "pointer",
      transform: 'scale(1.01)',
    },
    marginBottom: 50,
  },
});
