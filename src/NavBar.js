import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import logo from "./images/logo.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  rapper: {
    flexGrow: 1,
    backgroundColor: fade("#F5F3F4", 0),
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: fade("#F5F3F4", 0),
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      height: "6vw",
    },
    maxWidth: 200,
  },
  navContent: {
    marginTop: 210,
    display: "flex",
    flexDirection: "column",
    backgroundColor: fade("#F5F3F4", 0),
    justifyContent: "space-evenly",
    flexGrow: 1,
    marginLeft: theme.spacing(3),
    marginRight: 42,
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: 10,
      margin: 0,
    },
  },
  font: {
    fontSize: 26,
    color: "#555659",
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  fontSelected: {
    fontSize: 26,
    color: "#136d23",
    textAlign: "left",
    textDecoration: "underline",
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
    },
  },
  logo: {
    width: 100,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: 100,
    },
  },
  logowrap: {
    position: "absolute",
    left: 10,
    top: 4,
    height: 126,
    width: 126,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: 126,
      position: "relative",
      left: -20,
    },
  },
  logowrapBot: {
    position: "absolute",
    left: 0,
    width: 126,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("md")]: {
      width: 126,
      position: "relative",
      left: -20,
    },
  },

  logoBottom: {
    position: "relative",
    top: 44,
    width: 120,
    [theme.breakpoints.down("md")]: {
      top: 34,
      width: 180,
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  dropDown: {
    backgroundColor: "rgba(230, 170, 215, 0.3)",
    color: "#555659",
    position: "relative",
    zIndex: 999,
  },
}));

const NavBar = ({ alignBottom, state }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  console.log(window.location.pathname);
  return (
    <div className={classes.rapper}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          className={classes.nav}
          style={alignBottom ? { borderTop: "none" } : {}}
          alt="logo"
        >
          {window.location.pathname !== "/" && (
            <div
              className={alignBottom ? classes.logowrapBot : classes.logowrap}
            >
              <Link to="/">
                <img
                  src={logo}
                  className={alignBottom ? classes.logoBottom : classes.logo}
                />
              </Link>
            </div>
          )}
          <div className={classes.navContent}>
            <Link to="/teraria">
              <Typography
                variant="h6"
                color="inherit"
                className={
                  window.location.href.includes("teraria")
                    ? classes.fontSelected
                    : classes.font
                }
                style={{ position: "relative", top: 7 }}
              >
                Teráriá
              </Typography>
            </Link>
            <Link to="/chrobaky">
              <Typography
                variant="h6"
                color="inherit"
                className={
                  window.location.href.includes("chrobaky")
                    ? classes.fontSelected
                    : classes.font
                }
                style={{ position: "relative", top: 7 }}
              >
                Chrobáky
              </Typography>
            </Link>
            <Link to="/cerviky">
              <Typography
                variant="h6"
                color="inherit"
                className={
                  window.location.href.includes("cerviky")
                    ? classes.fontSelected
                    : classes.font
                }
                style={{ position: "relative", top: 7 }}
              >
                Červíky
              </Typography>
            </Link>
            <Link to="/kontakt">
              <Typography
                variant="h6"
                color="inherit"
                className={
                  window.location.href.includes("kontakt")
                    ? classes.fontSelected
                    : classes.font
                }
                style={{ position: "relative", top: 7 }}
              >
                Kontakt
              </Typography>
            </Link>
          </div>
          {/* <Link to="/kosik">
            <Badge
              badgeContent={badgeContent.buy + badgeContent.rent}
              color="error"
              position=""
            />
            <ShoppingCartOutlinedIcon className={classes.cart} />
          </Link>  */}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
