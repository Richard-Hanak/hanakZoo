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
import { Grid, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import a1 from "./images/chrobak1.jpg";
import a2 from "./images/chrobak2.jpg";
import phyllium from "./images/phyllium.webp";
import extatosoma from "./images/extatosoma.jpg";
import eurycanta from "./images/eurycanta.jpg";

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
    fontSize: 19,
    textAlign: "left",
    color: theme.text.primary.main,
    [theme.breakpoints.down("md")]: {
      padding: 0,
      fontSize: 22,
    },
  },
}));
const Chrobaky = ({ state }) => {
  const classes = useStyles();
  const [type, setType] = useState("phyllium");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const chrobaky = {
    phyllium: {
      title: "Phyllium giganteum",
      image: phyllium,
      text1:
        "Phyllium giganteum alebo listovka, je hmyz patriaci medzi strašilky. Pochádza z tropických pralesov Malajzie. Tento hmyz je obľúbený kvôli svojej prirodzenej schopnosti mimikri. Nehybnosťou, tvarom a sfarbením vyzerajú na nerozoznanie od živého listu. V umelom odchove nájdete v drvivej väčšine len samičky, ktoré dorastajú 12 cm, majú nefunkčné krídla a množia sa partenogenézou (nepotrebujú samčeka). Z nakladených vajíčok sa vo vhodných podmienkach, zhruba po pol roku, liahnu nymfy. Tie sa zvliekajú 6x, kým dosiahnu dospelosť, čo trvá približne trištvrte roka. Dospelá samička sa dožíva 6 až 9 mesiacov. Samček je rarita. Dorastá 8 cm, má podlhovastý tvar, v dospelosti má funkčné krídla a dožíva sa výrazne menej ako samičky. ",
      text2:
        "Chov je relatívne nenáročný, ako u väčšiny strašiliek.. Dôležité je vhodné insektárium, vlhkosť a potrava. Bežná izbová teplota je pre tento druh vyhovujúca. Listovky je najideálnejšie kŕmiť zelenými listami černíc. V zime sa to môže zdať náročné, ale ak si v lete vyhliadnete bohaté stanovisko černičia, v zime nebudete mať žiadny problém. Frekvencia výmeny černicových listov závisí na počte listoviek, ale ak im ho poskytnete dostatok, tak je to v zime dvakrát týždenne a po zvyšok roka ho stačí meniť za čerstvé raz za 7 dní. Listy černičia a voda, v ktorej sú, často stačia na udržanie optimálnej vlhkosti, no podľa potreby je možné ju zvýšiť rosením stien insektária. ",
    },
    extatosoma: {
      title: "Extatosoma tiaratum",
      image: extatosoma,
      text1:
        "Extatosoma tiaratum je strašilka endemicky sa vyskytujúca v Austrálií. Živia sa tu eukalyptom a dosahujú väčších rozmerov ako v našich podmienkach. Samičky môžu dorásť až 20 cm, majú zatočený abdomen, zakrpatené krídla a dožívajú sa 18 mesiacov. Ich typický vzhľad a kývavé pohyby im umožňujú splynúť s porastom. Rozmnožujú sa pohlavne, ale v neprítomnosti samčekov a v umelom odchove aj nepohlavne. Vajíčka kladú samičky z vyšších miest “rozhadzovaním” po okolí. Môžete ich počuť, ako klopkajú o steny insektária. O pol roka, niekedy aj dlhšiu dobu, sa z nich liahnu nymfy, ktoré sa svojim vzhľadom maskujú ako mravec. Postupným zvliekaním sa v priebehu pár mesiacov premenia na dospelé jedince. Výskyt samčekov v odchove je skôr výnimočný. Dorastajú 11 cm, dožívajú sa cca pol roka a sú slabšej konštitúcie. ",
      text2:
        "Ich chov sa v mnohom podobá na chov listoviek. Insektárium by malo zodpovedať väčším rozmerom tohto hmyzu. Extatosomy sa v našich podmienkach zvyčajne živia listami černíc. Teplota im vyhovuje izbová (20-25 °C), vlhkosť je možné udržiavať aj občasným rosením. ",
    },
    eurycanta: {
      title: "Eurycantha calcarata",
      image: eurycanta,
      text1:
        "Eurycantha calcarata, strašilka prirodzene vyskytujúca sa v tropických lesoch Novej Guiney, Novej Kaledónie a Šalamúnových ostrovoch. Sú obrnené, hrotnaté, mať ich v sajdkáre vášho Harleya by vyzeralo drsne. Samičky dorastajú 14 cm, majú mohutné telo, zakrpatené krídla, rozmnožujú sa pohlavne aj nepohlavne. Vajíčka sa liahnu približne za 6 mesiacov a za niekoľko mesiacov, zvliekajúce sa nymfy prechádzajúce rôznymi farebnými fázami, dospievajú. Samček je len o niečo menší ako samička. V ohrození dokážu nepríjemne “kopať”. Ich krídla sú taktiež nefunkčné. Dožívajú sa približne jeden a pol roka. ",
      text2:
        "Chov sa nelíši od chovu ostatných strašiliek, okrem ich nárokov na vlhkosť, ktorá je menšia.",
    },
  };

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
                <h1 className={classes.Welcome}>Chrobáky</h1>
              </Grid>
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
                <h3 className={classes.title} style={{ marginTop: 20 }}>
                  {chrobaky[type].title}
                </h3>
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
                    paddingBottom: 20,
                    maxWidth: 800,
                  }}
                >
                  <img
                    src={chrobaky[type].image}
                    style={{
                      width: "160px",
                      display: "inline-block",
                      float: "left",
                      marginRight: 10,
                      marginBottom: 2,
                      top: 4,
                      position: "relative",
                    }}
                  />{" "}
                  {chrobaky[type].text1}
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
                    paddingBottom: 40,
                    maxWidth: 800,
                  }}
                >
                  {chrobaky[type].text2}
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
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={type}
                onChange={(event) => setType(event.target.value)}
                style={{ position: "static", left: 20, bottom: 10 }}
              >
                <FormControlLabel
                  style={{ fontSize: 20 }}
                  value="phyllium"
                  control={<Radio />}
                  label="Phyllium giganteum"
                />
                <FormControlLabel
                  style={{ fontSize: 20 }}
                  value="extatosoma"
                  control={<Radio />}
                  label="Extatosoma tiaratum"
                />
                <FormControlLabel
                  style={{ fontSize: 20 }}
                  value="eurycanta"
                  control={<Radio />}
                  label="Eurycantha calcarata"
                />
              </RadioGroup>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Chrobaky;
