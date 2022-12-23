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

const images = [
  {
    original: a2,
  },
  {
    original: a1,
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
    fontSize: 20,
    textAlign: "left",
    color: theme.text.primary.main,
    [theme.breakpoints.down("md")]: {
      padding: 0,
      fontSize: 22,
    },
  },
}));
const Teraria = ({ state }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  const [type, setType] = useState("");
  const [nalepka, setNalepka] = useState("");
  const [material, setMaterial] = useState("");
  const [dimensions, setDimensions] = useState({
    vyska: 0,
    sirka: 0,
    hlbka: 0,
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
            height: "100vh",
            width: "100%",
            flexWrap: "nowrap",
          }}
        >
          <ImageSlider
            autoPlay={true}
            thumbnails={false}
            showBullets={true}
            items={images}
            nav={false}
          />
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
                <h1 className={classes.Welcome}>Zákazková výroba terárií</h1>
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
                    paddingBottom: 40,
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
                    paddingTop: 20,
                    maxWidth: 800,
                    fontWeight: 600,
                  }}
                >
                  Po zadaní požadovaných údajov, Vám kalkulačka vypočíta
                  približnú sumu.
                </p>
              </Grid>
            </Grid>
            <Grid
              direction="row"
              container
              spacing={8}
              style={{
                justifyContent: "space-between",
                flexGrow: 1,
                padding: 20,
                maxWidth: 900,
              }}
            >
              <Grid item lg={6} style={{ maxWidth: 400, position: "relative" }}>
                <h3 className={classes.title}>Rozmery</h3>
                <p style={{ marginTop: 20 }}>{`Výška: ${
                  dimensions.vyska ? dimensions.vyska + "cm" : ""
                } `}</p>
                <Slider
                  step={1}
                  aria-label="Výška"
                  value={dimensions.vyska}
                  onChange={(_, val) =>
                    setDimensions((pv) => {
                      return { ...pv, vyska: val };
                    })
                  }
                />
                <p style={{ marginTop: 20 }}>{`Šírka: ${
                  dimensions.sirka ? dimensions.sirka + "cm" : ""
                } `}</p>
                <Slider
                  step={1}
                  aria-label="Šírka"
                  value={dimensions.sirka}
                  onChange={(_, val) =>
                    setDimensions((pv) => {
                      return { ...pv, sirka: val };
                    })
                  }
                />
                <p style={{ marginTop: 20 }}>{`Hĺbka: ${
                  dimensions.hlbka ? dimensions.hlbka + "cm" : ""
                } `}</p>
                <Slider
                  step={1}
                  aria-label="Hĺbka"
                  value={dimensions.hlbka}
                  onChange={(_, val) =>
                    setDimensions((pv) => {
                      return { ...pv, hlbka: val };
                    })
                  }
                />
              </Grid>
              <Grid item lg={6} style={{ maxWidth: 400 }}>
                <h3 className={classes.title}>Materiál vrchnáku</h3>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={material}
                  onChange={(event) => setMaterial(event.target.value)}
                >
                  <FormControlLabel
                    style={{ fontSize: 20 }}
                    value="drevo"
                    control={<Radio />}
                    label="Drevo"
                  />
                  <FormControlLabel
                    style={{ fontSize: 20 }}
                    value="plexisklo"
                    control={<Radio />}
                    label="Plexisklo s nálepkou"
                  />
                </RadioGroup>
                <h3 className={classes.title} style={{ marginTop: 20 }}>
                  Typ nálepky
                </h3>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={nalepka}
                  onChange={(event) => setNalepka(event.target.value)}
                >
                  <FormControlLabel
                    style={{ fontSize: 20 }}
                    value="hneda"
                    control={<Radio />}
                    label="hnedá"
                  />
                  <FormControlLabel
                    style={{ fontSize: 20 }}
                    value="kremova"
                    control={<Radio />}
                    label="Krémová"
                  />
                </RadioGroup>
                <h3 className={classes.title} style={{ marginTop: 20 }}>
                  Druh hmyzu
                </h3>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                >
                  <FormControlLabel
                    style={{ fontSize: 20 }}
                    value="modlivky"
                    control={<Radio />}
                    label="Modlivky"
                  />
                  <FormControlLabel
                    style={{ fontSize: 20 }}
                    value="strasilky"
                    control={<Radio />}
                    label="Strašilky"
                  />
                </RadioGroup>
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
                    fontWeight: 600,
                    fontSize: 24,
                    paddingTop: 60,
                    maxWidth: 800,
                  }}
                >
                  Približná cena: 50€
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Teraria;
