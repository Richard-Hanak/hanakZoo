import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import ImageSlider from "./ImageSlider";
import Step from "@material-ui/core/Step";
import { Typography, Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  useTheme,
  makeStyles,
  ThemeProvider,
  G,
} from "@material-ui/core/styles";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import NavBar from "./NavBar";
import BottomNav from "./BottomNav";
import TextField from "@material-ui/core/TextField";
import useFormValidation from "./Checkout/useFormValidation";
import validateFormWarning from "./Checkout/validateFormWarning";
import a1 from "./images/front1.jpg";
import a3 from "./images/front3.jpg";
import a2 from "./images/front2.jpg";

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
];

const useStyles = makeStyles((theme) => ({
  Frontpage: {
    backgroundColor: "#F5F3F4",
    minHeight: "calc(100vh - 136px)",
    display: "flex",
    flexDirection: "column",
    // backgroundImage: "url(" + background + ")",
    // backgroundSize: "cover",
  },

  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "80%",
    width: 400,
  },
  Welcome: {
    marginTop: 200,
    left: -4,
    fontSize: 50,
    textAlign: "center",
    fontFamily: "RobotoCondensedB",
    color: "#136d23",
  },
  welcomeWrap: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      left: "16%",
      width: 300,
    },
  },
  button: {
    padding: 1,
    paddingLeft: 22,
    paddingRight: 22,
    fontSize: 18,
    textTransform: "none",
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
      fontSize: 19,
    },
  },
  text: {
    fontFamily: "RobotoCondensedR",
    color: theme.text.primary.main,
  },
}));

const stateMessage = {
  mail: "",
  message: "",
};

export default function Contact({ state }) {
  const classes = useStyles();
  const [thx, setThx] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(
    stateMessage,
    validateFormWarning,
    undefined,
    "message",
    setThx
  );

  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <NavBar state={state} />
        <Grid
          container
          spacing={3}
          style={{
            height: isMobile ? "100%" : "100vh",
            minHeight: "100vh",
            width: "100%",
            flexWrap: "nowrap",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {!isMobile && (
            <ImageSlider
              isContact={true}
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
              justifyContent: "center",
              flexGrow: 1,
              margin: 20,
              position: "relative",
            }}
          >
            <CssBaseline />

            <div>
              <Typography
                component="h1"
                variant="h4"
                align="center"
                style={{ marginTop: 100 }}
              >
                <h1 className={classes.Welcome}>Kontakt</h1>
              </Typography>

              <div style={{ paddingTop: 40, paddingBottom: 40 }}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.text}
                >
                  Ivo: 0903 390 866
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.text}
                >
                  Jana: 0904 513 045
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.text}
                >
                  Jakub: 0911 028 819
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.text}
                  style={{ marginTop: 20 }}
                >
                  Adresa:
                  <br />
                  Nová 118
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.text}
                >
                  Sása 962 62
                </Typography>

                <Typography
                  variant="h5"
                  align="center"
                  className={classes.text}
                  style={{ marginTop: 20 }}
                >
                  E-mail:
                  <br /> www.hanakhmyz.sk <br />
                  objednavky@hanakhmyz.sk
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
