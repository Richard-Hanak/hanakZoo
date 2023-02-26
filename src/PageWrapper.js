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
import { Grid } from "@material-ui/core";

const PageWrapper = ({ images, children }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
    noSsr: true,
  });

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
    noSsr: true,
  });

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <NavBar />
        <Grid
          container
          spacing={3}
          style={{
            minHeight: "100vh",
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
              marginLeft: isMobile
                ? 0
                : isMd
                ? "calc((100vh / 1.75) + 100px)"
                : "calc((100vh / 1.75) + 300px)",
              paddingRight: !isMobile ? 100 : 0,
            }}
          >
            {children}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PageWrapper;
