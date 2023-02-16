import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import logo from "./images/logo.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  return isMobile ? (
    <div>
      <div className="container"></div>
      <div
        className={open ? "button_container active" : "button_container"}
        id="toggle"
        onClick={() => setOpen((pv) => !pv)}
      >
        <span className="top" />
        <span className="middle" />
        <span className="bottom" />
      </div>
      <div className={open ? "overlay open" : "overlay"} id="overlay">
        <nav className="overlay-menu">
          <ul>
            <li>
              <a href="/hanakZoo/">Domov</a>
            </li>
            <li>
              <a href="/hanakZoo/teraria">Teráriá</a>
            </li>
            <li>
              <a href="/hanakZoo/chrobaky">Chrobáky</a>
            </li>
            <li>
              <a href="/hanakZoo/cerviky">Červíky</a>
            </li>
            <li>
              <a href="/hanakZoo/galeria">Galéria</a>
            </li>
            <li>
              <a href="/hanakZoo/kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  ) : (
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
