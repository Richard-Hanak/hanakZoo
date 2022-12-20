import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import NavBar from "../NavBar";
import BottomNav from "../BottomNav";

const useStyles = makeStyles((theme) => ({

}))


export default function TermsOfService() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Podmienky požívania
          </Typography>
        </Paper>
      <BottomNav/>
    </React.Fragment>
  );
}
