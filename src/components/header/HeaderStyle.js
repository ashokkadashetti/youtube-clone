import { makeStyles } from "@mui/styles";

export default makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "23.5px",
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "white",
  },
  headerLogo: {
    height: 25,
    objectFit: "contain",
    marginLeft: 20,
  },
  headerInputOne: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerInput: {
    display: "flex",
    border: "1px solid black",
  },
  headerInputButton: {
    width: "50px !important",
    backgroundColor: "#fafafa",
    borderLeft: "1px solid lightgray",
    color: "grey",
  },
  headerIconSearch: {
    display: "flexI",
  },
  headerIcons: {
    display: "flex",
    alignItems: "center",
  },
  headerIcon: {
    display: "flex",
    marginLeft: 20,
  },
  headerInputBorder: {
    flex: 1,
    border: "none",
  },
});
