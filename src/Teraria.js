import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ImageGallery from "react-image-gallery";
import {
  useTheme,
  makeStyles,
  ThemeProvider,
  G,
} from "@material-ui/core/styles";
import {
  Slider,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import PageWrapper from "./PageWrapper";
import a1 from "./images/terar1.png";
import a2 from "./images/terar2.jpg";
import a3 from "./images/terar3.jpg";
import a4 from "./images/terar4.jpg";
import a5 from "./images/terar5.jpg";
import exclusiv1 from "./images/teraria/exclusiv1.png";
import exclusiv2 from "./images/teraria/exclusiv2.png";
import klasik1 from "./images/teraria/klasik1.png";
import klasik2 from "./images/teraria/klasik2.jpg";
import mini1 from "./images/teraria/mini1.jpg";
import mini2 from "./images/teraria/mini2.jpg";
import standard1 from "./images/teraria/standard1.png";
import standard2 from "./images/teraria/standard2.png";
import standardP1 from "./images/teraria/standardP1.png";
import standardP2 from "./images/teraria/standardP2.png";

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
  const [expandedIndex, setExpandedIndex] = useState(0);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });
  console.log(klasik1.clientHeight);
  const renderTerrariaCollapse = () => {
    const terariaData = [
      {
        title: "Mini",
        height: "do 20 cm",
        price: "od 40 €",
        description: (
          <p
            className={classes.text}
            style={{
              maxWidth: 800,
            }}
          >
            Vhodné pre modlivky a malé druhy pakobyliek ako napr. Sungaya
            inexpectata, phyllium philippinicum.
          </p>
        ),
        images: [mini1, mini2],
        cardContentheight: 276,
      },
      {
        title: "Klasik",
        height: "do 30 cm",
        price: "od 80 €",
        description: (
          <p
            className={classes.text}
            style={{
              maxWidth: 800,
            }}
          >
            Terárium s väčšou plochou dna. Vhodné pre pavúky, stonožky,
            škorpióny, mnohonôžky, suchozemské kraby, chrobáky ...
          </p>
        ),
        images: [klasik1, klasik2],
        cardContentheight: 276,
      },
      {
        title: "Štandard",
        height: "od 28 cm",
        price: "od 50 €",
        description: (
          <p
            className={classes.text}
            style={{
              maxWidth: 800,
            }}
          >
            Vhodné pre všetky druhy nami chovaného hmyzu.
          </p>
        ),
        images: [standard1, standard2],
        cardContentheight: 310,
      },
      {
        title: "Štandard +",
        height: "od 28 cm",
        price: "od 70 €",
        description: (
          <p
            className={classes.text}
            style={{
              maxWidth: 800,
            }}
          >
            Štandard s dreveným vrchnákom
          </p>
        ),
        images: [standardP1, standardP2],
        cardContentheight: 310,
      },
      {
        title: "Exclusiv",
        height: "od 30 cm",
        price: "od 120 €",
        description: (
          <p
            className={classes.text}
            style={{
              maxWidth: 800,
            }}
          >
            Terárium s dreveným vrchnákom
            <br />
            <span style={{ textDecoration: "underline", marginRight: 6 }}>
              Polykarbonátové dno:
            </span>
            Zlepené s insektáriom (pevne spojené). <br />
            <span style={{ textDecoration: "underline", marginRight: 6 }}>
              Drevené dno:
            </span>
            Umožňujúce ľahšiu údržbu (nie je pevne spojené s insektáriom).
          </p>
        ),
        images: [exclusiv1, exclusiv2],
        cardContentheight: 310,
      },
    ];

    return terariaData.map((e, i) => (
      <Accordion
        expanded={expandedIndex === i}
        onChange={() => setExpandedIndex(i)}
        style={{
          width: "150%",
          margin: 4,
          backgroundColor: "#fbfbfb",
          // maxHeight: 400,
        }}
      >
        <AccordionSummary>
          <Typography
            className={classes.title}
            style={{
              fontWeight: 600,
              fontSize: 28,
            }}
          >
            {e.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            position: "relative",
            top: -64,
            height: e.cardContentheight,
          }}
        >
          <Grid
            container
            direction="row"
            style={{
              width: "50%",
              justifyContent: "left",
              display: "flex",
              marginTop: 64,
            }}
          >
            <div style={{ height: 60 }}>
              <p className={classes.text}>
                <b>Výška:</b> {e.height}
                <br /> <b>cena:</b> {e.price}
              </p>
              <br />
              {e.description}
            </div>
          </Grid>
          <Grid
            container
            direction="row"
            style={{
              width: "50%",
              justifyContent: "right",
              display: "flex",
            }}
          >
            <ImageGallery
              items={e.images.map((e) => {
                return {
                  original: e,
                };
              })}
              showFullscreenButton={false}
              showThumbnails={false}
              showPlayButton={false}
              autoPlay={false}
              showNav={true}
              infinite={true}
              additionalClass={expandedIndex === i ? "cardImgTrans" : "cardImg"}
            />
          </Grid>
        </AccordionDetails>
      </Accordion>
    ));
  };

  return (
    <PageWrapper images={images}>
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
            Chov hmyzu má pár úskalí. Jedným z nich je výber vhodného domova. Po
            novom Vám vieme s touto záležitosťou pomôcť. Terárium vyrobíme podľa
            Vašich požiadaviek na rozmery, materiál a druh chovaného hmyzu.
            Vďaka tomu získate nie len luxusné obydlie pre novú modlivku,
            pakobylku či listovku, ale aj bytový doplnok, ktorý nebude prekážať
            ani Vašej drahej polovičke.
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
            Insektáriá sú kompletne zariadené: podstielka, samorast, vázička na
            černičie.
            <br />
            možnosť zaslať kuriérom. Balné + kurier cca 15 €
          </p>
        </Grid>

        <Grid container style={{ width: "100%", maxWidth: 950 }}>
          {renderTerrariaCollapse()}
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Teraria;
