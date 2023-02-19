import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import NavBar from "./NavBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  useTheme,
  makeStyles,
  ThemeProvider,
  G,
} from "@material-ui/core/styles";
import {
  Slider,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import a1 from "./images/terar1.png";
import a2 from "./images/terar2.jpg";
import a3 from "./images/terar3.jpg";
import a4 from "./images/terar4.jpg";
import a5 from "./images/terar5.jpg";
import a6 from "./images/chrobak1.jpg";
import a7 from "./images/chrobak2.jpg";
import a8 from "./images/chrobak3.jpg";
import a9 from "./images/cerv1.jpg";
import a10 from "./images/cerv2.jpg";
import a11 from "./images/front1.jpg";
import a12 from "./images/front3.jpg";
import a13 from "./images/front2.jpg";

const images = [
  {
    original: a2,
  },
  {
    original: a1,
  },
  {
    original: a3,
  },
  {
    original: a4,
  },
  {
    original: a5,
  },
  {
    original: a6,
  },
  {
    original: a7,
  },
  {
    original: a8,
  },
  {
    original: a9,
  },
  {
    original: a10,
  },
  {
    original: a11,
  },
  {
    original: a12,
  },
  {
    original: a13,
  },
];

const useStyles = makeStyles((theme) => ({
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

  Welcome: {
    fontSize: 40,
    textAlign: "left",
    fontFamily: "RobotoCondensedB",
    color: "#136d23",
  },

  title: {
    fontSize: 24,
    textAlign: "left",
    fontFamily: "RobotoCondensedB",
    color: "#136d23",
  },

  text: {
    fontSize: 20,
    textAlign: "left",
    color: theme.text.primary.main,
    [theme.breakpoints.down("md")]: {
      padding: 0,
      fontSize: 19,
    },
  },
}));
const Teraria = ({ state }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <NavBar state={state} />
        <Grid
          container
          spacing={3}
          style={{
            height: isMobile ? "100%" : "100vh",
            width: "100%",
            flexWrap: "nowrap",
          }}
        >
          <ImageSlider
            autoPlay={true}
            thumbnails={false}
            showBullets={true}
            items={images}
            nav={false}
            isContact={true}
          />
        </Grid>
      </div>
    </>
  );
};

export default Teraria;
