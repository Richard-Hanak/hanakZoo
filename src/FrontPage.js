import React from "react";
import ImageSlider from "./ImageSlider";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  useTheme,
  makeStyles,
  ThemeProvider,
  G,
} from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import frontLogo from "./images/logoM.jpg";
import a1 from "./images/front1.jpg";
import a3 from "./images/front3.jpg";
import a2 from "./images/front2.jpg";
import a4 from "./images/terar3.jpg";

const images = [
  {
    original: a3,
  },
  {
    original: a1,
  },
  {
    original: a2,
  },
  {
    original: a4,
  },
];

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "RobotoCondensedB",
    color: "#136d23",
    [theme.breakpoints.down("md")]: {
      top: 80,
      padding: 0,
      fontSize: 22,
    },
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    color: theme.text.primary.main,
    [theme.breakpoints.down("md")]: {
      padding: 0,
      fontSize: 19,
    },
  },

  button: {
    padding: 1,
    paddingLeft: 22,
    paddingRight: 22,
    fontSize: 18,
    textTransform: "none",
  },
}));
const Frontpage = ({ state }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
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
          {!isMobile && (
            <ImageSlider
              autoPlay={true}
              thumbnails={false}
              showBullets={true}
              items={images}
              nav={false}
            />
          )}
          <Grid
            item
            xs="auto"
            style={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              margin: 20,
              paddingRight: !isMobile ? 100 : 0,
            }}
          >
            <Grid
              item
              xs="auto"
              style={{
                maxWidth: 800,
              }}
            >
              <Grid
                direction="column"
                container
                spacing={3}
                style={{ alignItems: "center" }}
              >
                <img
                  src={frontLogo}
                  style={{
                    width: "66%",
                    display: "block",
                    position: "relative",
                    //  left: 38,
                    top: isMobile ? 0 : -40,
                  }}
                />
              </Grid>
              <Grid
                item
                direction="row"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <h4
                  className={classes.title}
                  style={{
                    position: "relative",
                    top: isMobile ? 0 : -48,
                    //   right: isMobile ? 0 : -96,
                  }}
                >
                  Viac ako 20-ročná tradícia v chove exotických druhov plazov a
                  hmyzu
                </h4>
              </Grid>
              <Grid
                item
                direction="row"
                style={{
                  width: "100%",
                  justifyContent: "left",
                  display: "flex",
                }}
              >
                <p
                  className={classes.text}
                  style={{
                    paddingTop: isMobile ? 70 : 100,
                    fontWeight: 600,
                  }}
                >
                  V posledných rokoch sme rozšírili činnosť o chov a spracovanie
                  červov chrobáka rodu Zophobas.
                </p>
              </Grid>
              <Grid
                item
                direction="row"
                style={{
                  width: "100%",
                  justifyContent: "left",
                  display: "flex",
                }}
              >
                <p
                  className={classes.text}
                  style={{
                    paddingTop: isMobile ? 80 : 160,
                  }}
                >
                  Chov však nestačí, chceme ponúknuť našim zákazníkom vhodné
                  podmienky pre ich hmyzie klenoty, preto po novom ponúkame
                  výrobu terárií, podľa Vašich predstáv s ohľadom na ich
                  budúcich obyvateľov
                </p>
              </Grid>
              <Grid
                item
                direction="row"
                spacing={4}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                  marginTop: isMobile ? 60 : 40,
                }}
              >
                <>
                  <Link to="/teraria">
                    <Button
                      onClick={() => {}}
                      color="primary"
                      className={classes.button}
                      style={{ marginRight: 60 }}
                      variant="contained"
                    >
                      Teráriá
                    </Button>
                  </Link>{" "}
                  <Link to="/hmyz">
                    <Button
                      onClick={() => {}}
                      color="primary"
                      className={classes.button}
                      variant="contained"
                    >
                      Exotický hmyz
                    </Button>{" "}
                  </Link>
                </>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Frontpage;
