import { makeStyles } from "@mui/styles";

export default makeStyles({
  sideBar: {
    flex: 0.2,
    overflowY: "scroll",
    marginBottom: 40,
    height: "90%",
    "& hr": {
      height: 1,
      border: 0,
      backgroundColor: "lightgray",
      marginTop: 15,
      marginBottom: 14,
    },
  },

  sideBarH2: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    fontSize: 18,
    fontWeight: 400,
  },
  sideBarP: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    fontSize: 14,
    fontWeight: 350,
  },
  sideBarH3: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    fontSize: 14,
    fontWeight: 300,
  },
});
