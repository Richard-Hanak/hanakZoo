import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";
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
import a1 from "./images/cerv1.jpg";
import a2 from "./images/cerv2.jpg";

const images = [
  {
    original: a1,
  },
  {
    original: a2,
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
    [theme.breakpoints.down("md")]: {
      top: 80,
      right: 54,
      padding: 0,
      fontSize: 22,
    },
  },

  title: {
    fontSize: 24,
    textAlign: "left",
    fontFamily: "RobotoCondensedB",
    color: "#136d23",
    [theme.breakpoints.down("md")]: {
      top: 80,
      right: 54,
      padding: 0,
      fontSize: 22,
    },
  },

  text: {
    fontSize: 19,
    textAlign: "left",
    color: theme.text.primary.main,
    [theme.breakpoints.down("md")]: {
      padding: 0,
      fontSize: 22,
    },
  },
}));
const Cerviky = ({ state }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <NavBar state={state} />
        <Grid
          container
          spacing={3}
          style={{ height: "100vh", width: "100%", flexWrap: "nowrap" }}
        >
          <div>
            <ImageSlider
              style={{
                backgroundColor: "grey",
                width: "56.25vh",
                height: "100vh",
              }}
              autoPlay={true}
              thumbnails={false}
              showBullets={true}
              items={images}
              nav={false}
            />
          </div>
          <Grid
            item
            // xs="auto"
            style={{ justifyContent: "center", flexGrow: 1 }}
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
                <h1 className={classes.Welcome}>Červíky</h1>
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
                    paddingBottom: 10,
                    maxWidth: 800,
                  }}
                >
                  Chovu červov sa venujeme druhým rokom. S potešením môžeme
                  tvrdiť, že je to výživná pochúťka nie len pre naše agamy…
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
                    paddingBottom: 10,
                    maxWidth: 800,
                  }}
                >
                  Zophobas morio alebo Potemník peruánsky, alebo “múčny červ”,
                  je chrobák pochádzajúci z tropických oblastí Strednej a Južnej
                  Ameriky. Je však rozšírený po celom svete, kde sa jeho larvy
                  využívajú ako kŕmna surovina hmyzožravých zvierat. Hitom sa
                  stáva aj vďaka jeho postupnému zaraďovaniu do jedálnička Homo
                  sapiens sapiens.
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
                    paddingBottom: 10,
                    maxWidth: 800,
                  }}
                >
                  Dospelý jedinec dorastá do 6 cm. Aj keď je považovaný za
                  skladiskového škodcu, odchov chrobákov nie je jednoduchý,
                  pretože vyžaduje manipuláciu s každým jedincom. Prvé larvy sa
                  z vajíčok liahnu za niekoľko dní. Sú takmer neviditeľné. Ich
                  rast sa nedá časovo ohraničiť, pretože závisí na faktoroch ako
                  sú teplota či ich počet v jednej nádobe. Larvy sa môžu zvliecť
                  až 18 krát, kým sú pripravené na zakuklenie. Každá larva
                  potrebuje svoj vlastný priestor, inak sa nezakuklí a pokračuje
                  v zvliekaní, až kým neuhynie. Ak sú larvy pripravené a
                  oddelené, zakuklia sa a môžu začať dva týždne premeny
                  podlhovastej bielo-hnedej hmoty na veľkého čierneho chrobáka s
                  nefunkčnými krídlami. Ak už nič iné, je to minimálne
                  fascinujúce!
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
                    paddingBottom: 10,
                    maxWidth: 800,
                  }}
                >
                  Múčny červ môžete v zahraničnej literatúre nájsť aj pod
                  označením “superworm” (superčerv). Niet sa čo čudovať.
                  Prebehlo množstvo štúdií s rôznym cieľom, ale spoločným
                  subjektom - Zophobas moria. Ukazujú, že je tento červ bohatým
                  zdrojom dusíka, mastných kyselín, aminokyselín, dokonca
                  pozitívne ovplyvňuje mikrobióm tráviaceho traktu a tým
                  napomáha obranyschopnosti organizmu. Ale pozor! Červíky sú to
                  veľké, výživné a chutné, ale taká agama je malá, na svoju
                  figúru nepozerá a nepovie Vám nie. Zato my sme veľkí a toto
                  riziko je pre nás malé, preto je škoda takýto skvelý zdroj
                  bielkovín nevyužiť!
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
                    paddingBottom: 10,
                    maxWidth: 800,
                    fontWeight: 600,
                  }}
                >
                  Náš vlastný odchov červov si môžete pozrieť, vyskúšať, či
                  kúpiť na najbližšej burze, ktorej sa zúčastníme alebo nás
                  <Link to="/kontakt" style={{ color: "#136d23" }}>
                    {" "}
                    kontaktujte
                  </Link>
                  .
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Cerviky;
