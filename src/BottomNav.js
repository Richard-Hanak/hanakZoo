import React from "react";
import { useTheme, withStyles, makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { BottomNavigationAction, BottomNavigation } from "@material-ui/core";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: fade("#F5F3F4", 0),
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    maxWidth: "100%",
    margin: 186,
    marginBottom: 0,
    paddingBottom: 80,
    [theme.breakpoints.down("md")]: {
      margin: 40,
      marginBottom: 0,
      paddingBottom: 40,
    },
    [theme.breakpoints.down("xs")]: {
      margin: 20,
      marginBottom: 0,
      paddingBottom: 20,
    },
  },
  grid: {
    padding: 40,
  },
  insta: {
    background:
      "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
    fill: "white",
    borderRadius: "25%",
    transform: "scale(2)",
    [theme.breakpoints.down("xs")]: {
      transform: "scale(1.5)",
    },
  },
  faceb: {
    fill: "#3b5998",
    transform: "scale(2.6)",
    [theme.breakpoints.down("xs")]: {
      transform: "scale(1.9)",
    },
  },
}));

const BottomNav = () => {
  const classes = useStyles();

  return (
    <BottomNavigation showLabels={true} className={classes.root}>
      <div>
        <a href="https://www.facebook.com/Little-Pumpkin-113885286978159" target="_blanc">
          <BottomNavigationAction
            label="Facebook"
            icon={<FacebookIcon className={classes.faceb} />}
          />
        </a>
        <a href="https://www.instagram.com/littlepumpkin000/" target="_blanc">
          <BottomNavigationAction
            label="Instagram"
            icon={<InstagramIcon className={classes.insta} />}
          />
        </a>
      </div>
      <BottomNavigationAction
        label="Podmienky používania"
        style={{ position: "relative", top: 35 }}
      />
    </BottomNavigation>
  );
};

export default BottomNav;
