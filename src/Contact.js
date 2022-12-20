import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import { Typography, Grid } from "@material-ui/core";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import NavBar from "./NavBar";
import BottomNav from "./BottomNav";
import TextField from "@material-ui/core/TextField";
import useFormValidation from "./Checkout/useFormValidation";
import validateFormWarning from "./Checkout/validateFormWarning";

const useStyles = makeStyles((theme) => ({
  Frontpage: {
    backgroundColor: "#F5F3F4",
    minHeight: "calc(100vh - 136px)",
    display: "flex",
    flexDirection: "column",
    // backgroundImage: "url(" + background + ")",
    // backgroundSize: "cover",
  },
  contentWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "80%",
    maxWidth: 700,
  },
  welcome: {
    padding: 40,
    paddingRight: 86,
    paddingTop: 80,
    fontSize: 120,
    fontFamily: "heavenly",
    color: theme.text.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: 100,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 80,
    },
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
    marginTop: theme.spacing(3),
    //marginLeft: theme.spacing(1),
    color: "white",
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
  text: {
    fontFamily: "SahityaR",
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
          <Grid item xs="auto">
            <CssBaseline />

            <div className={classes.contentWrap}>
              <Typography
                component="h1"
                variant="h4"
                align="center"
                className={classes.welcome}
              >
                Kontakt
              </Typography>{" "}
              {!thx ? (
                <div className={classes.form}>
                  <TextField
                    fullWidth
                    id="mail"
                    name="mail"
                    label="váš e-mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={errors.mail}
                    error={errors.mail}
                  />
                  <TextField
                    style={{ marginTop: 30 }}
                    fullWidth
                    id="message"
                    name="message"
                    label="vaša správa"
                    multiline
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.message}
                    helperText={errors.message}
                  />
                  <Button
                    onClick={() => {
                      handleSubmit();
                    }}
                    color="primary"
                    className={classes.button}
                    variant="contained"
                  >
                    Odoslať
                  </Button>
                </div>
              ) : (
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.text}
                  style={{ padding: 50 }}
                >
                  Ďakujeme za vašu správu. Odpovieme vám hneď, ako to bude
                  možné.
                </Typography>
              )}
              {/*<div style={{ paddingTop: 80, paddingBottom: 40 }}>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.text}
                    style={{ paddingTop: 50 }}
                  >
                    Iveta Jankolová
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.text}
                  >
                    Nová 55
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
                  >
                    Tel. č.: +421904146671
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.text}
                  >
                    IČO: 53 034 627
                  </Typography>
                  <Typography
                    variant="h5"
                    align="center"
                    className={classes.text}
                  >
                    IBAN SK64 8360 5207 0042 0712 1043
                  </Typography>
                </div>*/}
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
