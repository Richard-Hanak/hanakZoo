import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import NavBar from "./NavBar";
import BottomNav from "./BottomNav";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ClearIcon from "@material-ui/icons/Clear";
import ruzenka from "./images/fotky/ruzenka/thumbnails/2.jpg";
import angelika from "./images/fotky/angelika/thumbnails/3.jpg";
import lejka from "./images/fotky/lejka/thumbnails/1.jpg";
import amelia from "./images/fotky/amelia/thumbnails/3.jpg";
import jazmina from "./images/fotky/jasmina/thumbnails/1.png";
import riasenie from "./images/fotky/riasenie/thumbnails/1.jpg";
import gerdaKay from "./images/fotky/gerda/thumbnails/1.jpg";
import ameliaKay from "./images/fotky/amelia/thumbnails/3.jpg";
import gerda from "./images/fotky/gerda/thumbnails/1.jpg";
import kay from "./images/fotky/gerda/thumbnails/1.jpg";
import Divider from "@material-ui/core/Divider";
import ReactPixel from "react-facebook-pixel";

const useStyles = makeStyles((theme) => ({
  wrap: {
    minHeight: "76vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    flexGrow: 1,
    textAlign: "left",
    textJustify: "center",
    paddingLeft: 40,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      paddingLeft: 18,
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 8,
      fontSize: 16,
    },
  },
  text: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
  textAmount: {
    position: "relative",
    top: 5,
    [theme.breakpoints.down("sm")]: {
      top: 9,
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      top: 9,
      fontSize: 16,
    },
  },
  img: {
    [theme.breakpoints.down("xs")]: {
      height: 48,
      borderRadius: 4,
    },
  },
  iconButton: {
    [theme.breakpoints.down("xs")]: {
      padding: 6,
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 28,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
    },
  },
  amountWrapper: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    right: 190,
    [theme.breakpoints.down("sm")]: {
      right: 120,
    },
    [theme.breakpoints.down("xs")]: {
      right: 80,
    },
  },

  price: {
    paddingRight: 40,
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
      paddingRight: 20,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      fontSize: 18,
    },
  },
  paper: {
    position: "relative",
    width: "80%",
    maxWidth: 1300,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 14,
    margin: 10,
    [theme.breakpoints.down("sm")]: {
      padding: 4,
      width: "94%",
    },
  },
  paperBottom: {
    width: "80%",
    maxWidth: 1300,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: 24,
    margin: 10,
    [theme.breakpoints.down("sm")]: {
      padding: 10,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 6,
      width: "90%",
    },
  },
  icon: {
    fontSize: 30,
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  },
  button: {
    fontFamily: "RobotoCondensed-Bold",
    width: 180,
    padding: 8,
    paddingLeft: 14,
    paddingRight: 14,
    color: "white",
    fontSize: 16,
    letterSpacing: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      width: 100,
    },
  },
}));

let images = {
  ruzenka,
  angelika,
  lejka,
  riasenie,
  jazmina,
  gerdaKay,
  gerda,
  kay,
  amelia,
  ameliaKay,
};
let names = {
  ruzenka: "Ruženka",
  angelika: "Angelika",
  lejka: "Lejka",
  riasenie: "riasenie",
  jazmina: "Jazmína",
  gerdaKay: "čiapka a nákrčník",
  gerda: "čiapka Gerda",
  ameliaKay: "čiapka a nákrčník",
  amelia: "Amélia",
  kay: "nákrčník Kay",
};

export default function ShoppingCart({ state, handleStateChange }) {
  const classes = useStyles();
  const [renderRent, setRenderRent] = useState(false);
  const total = state
    .map((e) => e.buy * e.price + e.rent * e.rentPrice)
    .reduce((a, b) => a + b);
  const deposit = state
    .map((e) => (e.price - e.rentPrice) * e.rent)
    .reduce((a, b) => a + b);
  useEffect(() => {
    state.map((e) => (e.rent ? setRenderRent(true) : null));
  }, [state]);

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Typography
        className={classes.title}
        component="h1"
        variant="h2"
        align="center"
        style={{ padding: 30 }}
      >
        Kúpa
      </Typography>
      <div className={classes.wrap}>
        {state.map((item) =>
          item.buy ? (
            <Paper className={classes.paper}>
              <img src={images[item.name]} className={classes.img}></img>
              <Typography
                component="h1"
                variant="h4"
                align="center"
                className={classes.name}
              >
                {names[item.name]}
              </Typography>
              <div className={classes.amountWrapper}>
                <IconButton
                  className={classes.iconButton}
                  color="primary"
                  aria-label="remove item"
                  onClick={() => handleStateChange("buyMinus", item.name)}
                >
                  <RemoveIcon className={classes.icon} />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  className={classes.textAmount}
                >
                  {item.buy}
                </Typography>
                <IconButton
                  className={classes.iconButton}
                  color="primary"
                  aria-label="add item"
                  onClick={() => handleStateChange("buyPlus", item.name)}
                >
                  <AddIcon className={classes.icon} />
                </IconButton>
              </div>
              <Typography
                className={classes.price}
                component="h1"
                variant="h4"
                align="center"
              >
                {item.price * item.buy}€
              </Typography>
              <IconButton
                className={classes.iconButton}
                style={{ color: "#c80d0d" }}
                aria-label="clear item"
                onClick={() => handleStateChange("buyRemove", item.name)}
              >
                <ClearIcon className={classes.icon} />
              </IconButton>
            </Paper>
          ) : null
        )}
        {renderRent ? (
          <Typography
            className={classes.title}
            component="h1"
            variant="h2"
            align="center"
            style={{ padding: 30 }}
          >
            Prenájom
          </Typography>
        ) : null}
        {state.map((item) =>
          item.rent ? (
            <Paper className={classes.paper}>
              <img src={images[item.name]} className={classes.img}></img>
              <Typography
                component="h1"
                variant="h4"
                align="center"
                className={classes.name}
              >
                {names[item.name]}
              </Typography>
              <div className={classes.amountWrapper}>
                <IconButton
                  className={classes.iconButton}
                  color="primary"
                  aria-label="remove item"
                  onClick={() => handleStateChange("rentMinus", item.name)}
                >
                  <RemoveIcon className={classes.icon} />
                </IconButton>
                <Typography
                  component="h1"
                  variant="h4"
                  align="center"
                  className={classes.textAmount}
                >
                  {item.rent}
                </Typography>
                <IconButton
                  className={classes.iconButton}
                  color="primary"
                  aria-label="add item"
                  onClick={() => handleStateChange("rentPlus", item.name)}
                >
                  <AddIcon className={classes.icon} />
                </IconButton>
              </div>
              <Typography
                className={classes.price}
                component="h1"
                variant="h4"
                align="center"
              >
                {item.rentPrice * item.rent}€
              </Typography>
              <IconButton
                style={{ color: "#c80d0d" }}
                aria-label="clear item"
                className={classes.iconButton}
              >
                <ClearIcon
                  className={classes.icon}
                  onClick={() => handleStateChange("rentRemove", item.name)}
                />
              </IconButton>
            </Paper>
          ) : null
        )}
        {renderRent ? (
          <Paper className={classes.paper}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              className={classes.name}
            >
              Záloha
            </Typography>
            <Typography
              className={classes.price}
              component="h1"
              variant="h4"
              align="center"
            >
              {deposit}€
            </Typography>
          </Paper>
        ) : null}
        <Divider style={{ width: "80%", height: 2, marginTop: 50 }} />
        <Paper className={classes.paper} style={{ marginTop: 56 }}>
          <Typography
            className={classes.text}
            component="h1"
            variant="h4"
            align="center"
            style={{ paddingLeft: 40, display: "flex", flexGrow: 1 }}
          >
            Poštovné
          </Typography>
          <Typography
            className={classes.text}
            component="h1"
            variant="h4"
            align="center"
            style={{
              paddingLeft: 40,
              display: "flex",
              flexDirection: "row",
              paddingRight: 40,
            }}
          >
            3.00€
          </Typography>
        </Paper>
        <Paper
          className={classes.paper}
          style={{ height: 90, marginTop: 16, justifyContent: "flex-end" }}
        >
          <Link to="/platba">
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={() => ReactPixel.track("InitiateCheckout", {})}
            >
              Pokračovať
            </Button>
          </Link>
          <Typography
            className={classes.text}
            component="h1"
            variant="h4"
            align="center"
            style={{
              paddingLeft: 40,
              display: "flex",
              flexDirection: "row",
              paddingRight: 40,
            }}
          >
            <Typography
              className={classes.text}
              component="h1"
              variant="h5"
              align="center"
              style={{ paddingRight: 20, position: "relative", top: 5 }}
            >
              {"Spolu:"}
            </Typography>
            {(total + 3 + deposit).toFixed(2)} €
          </Typography>
        </Paper>
      </div>
      <BottomNav />
    </React.Fragment>
  );
}
