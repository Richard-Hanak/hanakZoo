import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import NavBar from "./NavBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import background from "./images/pozadie2.svg";
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
import a1 from "./images/frontpage/1.jpg";
import a0 from "./images/frontpage/0.jpg";
import a2 from "./images/frontpage/02.jpg";
import a3 from "./images/frontpage/03.jpg";
import a4 from "./images/frontpage/04.jpg";

const images = [
  {
    original: a0,
  },
  {
    original: a1,
  },
  {
    original: a2,
  },
  {
    original: a3,
  },
  {
    original: a4,
  },
];

const useStyles = makeStyles((theme) => ({
  welcome: {
    fontSize: 200,
    fontFamily: "heavenly",
    color: theme.text.primary.main,
    [theme.breakpoints.down("sm")]: {
      fontSize: 160,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 100,
      position: "relative",
      right: 40,
    },
  },
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
          <Grid item xs="auto" style={{ flexGrow: 1 }}>
            <h1>Teráriá</h1>
            <p>Spravíme terária na mieru bla bla.</p>
            <Grid direction="row" container spacing={8}>
              <Grid item lg={6}>
                <h3>Rozmery</h3>
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
              <Grid item lg={6}>
                <h3>Materiál vrchnáku</h3>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={material}
                  onChange={(event) => setMaterial(event.target.value)}
                >
                  <FormControlLabel
                    value="drevo"
                    control={<Radio />}
                    label="Drevo"
                  />
                  <FormControlLabel
                    value="plexisklo"
                    control={<Radio />}
                    label="Plexisklo s nálepkou"
                  />
                </RadioGroup>
                <h3>Typ nálepky</h3>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={nalepka}
                  onChange={(event) => setNalepka(event.target.value)}
                >
                  <FormControlLabel
                    value="hneda"
                    control={<Radio />}
                    label="hnedá"
                  />
                  <FormControlLabel
                    value="kremova"
                    control={<Radio />}
                    label="Krémová"
                  />
                </RadioGroup>
                <h3>Druh hmyzu</h3>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                >
                  <FormControlLabel
                    value="modlivky"
                    control={<Radio />}
                    label="Modlivky"
                  />
                  <FormControlLabel
                    value="strasilky"
                    control={<Radio />}
                    label="Strašilky"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Teraria;
