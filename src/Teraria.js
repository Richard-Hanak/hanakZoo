import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import NavBar from "./NavBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  useTheme,
  makeStyles,
  ThemeProvider,
  G,
} from "@material-ui/core/styles";
import {
  Slider,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import a1 from "./images/terar1.png";
import a2 from "./images/terar2.jpg";
import a3 from "./images/terar3.jpg";
import a4 from "./images/terar4.jpg";
import a5 from "./images/terar5.jpg";

const images = [
  {
    original: a2,
  },
  {
    original: a1,
  },
  {
    original: a3,
  },
  {
    original: a4,
  },
  {
    original: a5,
  },
];

const useStyles = makeStyles((theme) => ({
  welcomeWrap: {
    position: "relative",
    padding: 40,
    paddingTop: 120,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      width: 300,
      paddingRight: 0,
      right: "-10%",
    },
  },

  Welcome: {
    fontSize: 40,
    textAlign: "left",
    fontFamily: "RobotoCondensedB",
    color: "#136d23",
  },

  title: {
    fontSize: 24,
    textAlign: "left",
    fontFamily: "RobotoCondensedB",
    color: "#136d23",
  },

  text: {
    fontSize: 20,
    textAlign: "left",
    color: theme.text.primary.main,
    [theme.breakpoints.down("md")]: {
      padding: 0,
      fontSize: 19,
    },
  },

  gridCard: {
    width: "50%",
    marginTop: 40,
    paddingRight: 20,
    paddingLeft: 12,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));
const Teraria = ({ state }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
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
              justifyContent: "center",
              flexGrow: 1,
              margin: 20,
              position: "relative",
            }}
          >
            <Grid direction="column" container spacing={3}>
              <Grid
                item
                direction="row"
                style={{
                  width: "100%",
                  justifyContent: "left",
                  display: "flex",
                  position: "relative",
                }}
              >
                <h1 className={classes.Welcome}>
                  Zákazková výroba polykarbonátových terárií
                </h1>
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
                    maxWidth: 800,
                  }}
                >
                  Chov hmyzu má pár úskalí. Jedným z nich je výber vhodného
                  domova. Po novom Vám vieme s touto záležitosťou pomôcť.
                  Terárium vyrobíme podľa Vašich požiadaviek na rozmery,
                  materiál a druh chovaného hmyzu. Vďaka tomu získate nie len
                  luxusné obydlie pre novú modlivku, pakobylku či listovku, ale
                  aj bytový doplnok, ktorý nebude prekážať ani Vašej drahej
                  polovičke.
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
                    maxWidth: 800,
                  }}
                >
                  Insektáriá sú kompletne zariadené: podstielka, samorast,
                  vázička na černičie.
                  <br />
                  možnosť zaslať kuriérom. Balné + kurier cca 15 €
                </p>
              </Grid>
              <Grid container style={{ width: "100%", maxWidth: 800 }}>
                <Grid item className={classes.gridCard}>
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
                      className={classes.title}
                      style={{
                        fontWeight: 600,
                        fontSize: 28,
                      }}
                    >
                      Mini
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
                        paddingBottom: 0,
                        paddingTop: 0,
                        maxWidth: 800,
                      }}
                    >
                      <b>Výška:</b> do 20 cm
                      <br /> <b>cena:</b> od 40 €
                    </p>
                  </Grid>
                  <Grid
                    item
                    direction="row"
                    style={{
                      paddingTop: 0,
                      width: "100%",
                      justifyContent: "left",
                      display: "flex",
                    }}
                  >
                    <p
                      className={classes.text}
                      style={{
                        maxWidth: 800,
                      }}
                    >
                      Vhodné pre modlivky a malé druhy pakobyliek ako napr.
                      Sungaya inexpectata, phyllium philippinicum.
                    </p>
                  </Grid>
                </Grid>{" "}
                <Grid item className={classes.gridCard}>
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
                      className={classes.title}
                      style={{
                        fontWeight: 600,
                        fontSize: 28,
                      }}
                    >
                      Klasik
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
                        paddingBottom: 0,
                        paddingTop: 0,
                        maxWidth: 800,
                      }}
                    >
                      <b>Výška:</b> do 30 cm <br /> <b>cena:</b> od 80 €
                    </p>
                  </Grid>
                  <Grid
                    item
                    direction="row"
                    style={{
                      paddingTop: 0,
                      width: "100%",
                      justifyContent: "left",
                      display: "flex",
                    }}
                  >
                    <p
                      className={classes.text}
                      style={{
                        maxWidth: 800,
                      }}
                    >
                      Terárium s väčšou plochou dna. Vhodné pre pavúky,
                      stonožky, škorpióny, mnohonôžky, suchozemské kraby,
                      chrobáky ...
                    </p>
                  </Grid>
                </Grid>{" "}
                <Grid item className={classes.gridCard}>
                  <Grid
                    item
                    direction="row"
                    style={{
                      width: "100%",
                      justifyContent: "left",
                      display: "flex",
                      paddingTop: 0,
                    }}
                  >
                    <p
                      className={classes.title}
                      style={{
                        fontWeight: 600,
                        fontSize: 28,
                      }}
                    >
                      Štandard
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
                        paddingBottom: 0,
                        paddingTop: 0,
                        maxWidth: 800,
                      }}
                    >
                      <b>Výška:</b> od 28 cm <br /> <b>cena:</b> od 50 €
                    </p>
                  </Grid>
                  <Grid
                    item
                    direction="row"
                    style={{
                      paddingTop: 0,
                      width: "100%",
                      justifyContent: "left",
                      display: "flex",
                    }}
                  >
                    <p
                      className={classes.text}
                      style={{
                        maxWidth: 800,
                      }}
                    >
                      Vhodné pre všetky druhy nami chovaného hmyzu.
                    </p>
                  </Grid>{" "}
                </Grid>
                <Grid item className={classes.gridCard}>
                  {" "}
                  <Grid
                    item
                    direction="row"
                    style={{
                      width: "100%",
                      justifyContent: "left",
                      display: "flex",
                      paddingTop: 0,
                    }}
                  >
                    <p
                      className={classes.title}
                      style={{
                        fontWeight: 600,
                        fontSize: 28,
                      }}
                    >
                      Exclusiv
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
                        paddingBottom: 0,
                        paddingTop: 0,
                        maxWidth: 800,
                      }}
                    >
                      <b>Výška:</b> od 30 cm <br /> <b>cena:</b> od 120 €
                    </p>
                  </Grid>
                  <Grid
                    item
                    direction="row"
                    style={{
                      paddingTop: 0,
                      width: "100%",
                      justifyContent: "left",
                      display: "flex",
                    }}
                  >
                    <p
                      className={classes.text}
                      style={{
                        maxWidth: 800,
                      }}
                    >
                      Terárium s dreveným vrchnákom
                      <br />
                      <span
                        style={{ textDecoration: "underline", marginRight: 6 }}
                      >
                        Polykarbonátové dno:
                      </span>
                      Zlepené s insektáriom (pevne spojené). <br />
                      <span
                        style={{ textDecoration: "underline", marginRight: 6 }}
                      >
                        Drevené dno:
                      </span>
                      Umožňujúce ľahšiu údržbu (nie je pevne spojené s
                      insektáriom).
                    </p>
                  </Grid>
                </Grid>{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Teraria;
