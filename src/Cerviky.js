import React from "react";
import ImageSlider from "./ImageSlider";
import NavBar from "./NavBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import background from "./images/pozadie2.svg";
import {
  useTheme,
  makeStyles,
  ThemeProvider,
  G,
} from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import a1 from "./images/frontpage/1.jpg";
import a0 from "./images/frontpage/0.jpg";
import a2 from "./images/frontpage/02.jpg";
import a3 from "./images/frontpage/03.jpg";
import a4 from "./images/frontpage/04.jpg";

const images = [
  {
    original: a0,
  },
  {
    original: a1,
  },
  {
    original: a2,
  },
  {
    original: a3,
  },
  {
    original: a4,
  },
];

const useStyles = makeStyles((theme) => ({
  welcome: {
    fontSize: 200,
    fontFamily: "heavenly",
    color: theme.text.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: 160,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 100,
      position: "relative",
      right: 40,
    },
  },
  welcomeWrap: {
    position: "relative",
    padding: 40,
    paddingTop: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      width: 300,
      paddingRight: 0,
      right: "-10%",
    },
  },
  welcomeText: {
    position: "relative",
    top: 80,
    right: 82,
    paddingRight: 82,
    fontSize: 32,
    color: theme.text.secondary.main,
    [theme.breakpoints.down("md")]: {
      top: 80,
      right: 54,
      padding: 0,
      fontSize: 22,
    },
  },
}));
const Cerviky = ({ state }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <NavBar state={state} />
        <Grid container spacing={3} style={{ height: "100vh", width: "100%" }}>
          <div
            style={{
              backgroundColor: "grey",
              width: "56.25vh",
              height: "100vh",
            }}
          >
            {/*<ImageSlider
              autoPlay={true}
              thumbnails={false}
              showBullets={true}
              items={images}
              nav={false}
            />*/}
          </div>
          <Grid item xs="auto"></Grid>
        </Grid>
      </div>
    </>
  );
};

export default Cerviky;
