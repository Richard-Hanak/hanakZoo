import React, { useState, useCallback, useReducer, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import background from "./images/pozadie2.svg";
import {
  useTheme,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import heavenlyBold from "./fonts/Heavenly-bold.ttf";
import sahityaBold from "./fonts/Sahitya-Bold.ttf";
import sahityaRegular from "./fonts/Sahitya-Regular.ttf";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import "./App.css";
import { Typography } from "@material-ui/core";
import Frontpage from "./FrontPage";
import Collections from "./Teraria";
import Cerviky from "./Cerviky";
import Chrobaky from "./Chrobaky";
import Teraria from "./Teraria";
import ShoppingCart from "./ShoppingCart";
import Contact from "./Contact";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const heavenly = {
  fontFamily: "heavenly",
  fontStyle: "bold",
  fontDisplay: "swap",
  src: `
    local('heavenly-bold'),
    url(${heavenlyBold}) format('truetype')
  `,
};

const sahityaB = {
  fontFamily: "Sahitya-Bold",
  fontStyle: "bold",
  fontDisplay: "swap",
  src: `
    local('Sahitya-Bold'),
    url(${sahityaBold}) format('truetype')
  `,
};

const sahityaR = {
  fontFamily: "SahityaR",
  fontStyle: "regular",
  fontDisplay: "swap",
  src: `
    local('Sahitya-Regular'),
    url(${sahityaRegular}) format('truetype')
  `,
};

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#136d23",
      },
      secondary: {
        main: "#136d23",
      },
    },
    text: {
      primary: {
        main: "#555659",
      },
      secondary: {
        main: "#828282",
      },
    },
    typography: {
      fontFamily: "sahityaR, Arial",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [sahityaR, sahityaB, heavenly],
        },
      },
    },
  });

  const useStyles = makeStyles((theme) => ({
    App: {
      backgroundColor: "rgb(237, 237, 240)",
    },
  }));

  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.App}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Frontpage />
              </Route>
              <Route path="/cerviky">
                <Cerviky />
              </Route>
              <Route path="/chrobaky">
                <Chrobaky />
              </Route>
              <Route path="/teraria">
                <Teraria />
              </Route>
              {/* <Route path="/kosik">
                <ShoppingCart />
  </Route> 
              <Route exact path="/platba">
                <Checkout />
              </Route> */}
              <Route exact path="/kontakt">
                <Contact />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
