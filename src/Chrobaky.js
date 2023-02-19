import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import NavBar from "./NavBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PropTypes from "prop-types";
import {
  useTheme,
  makeStyles,
  ThemeProvider,
  G,
} from "@material-ui/core/styles";
import {
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Tabs,
  Tab,
} from "@material-ui/core";
import a1 from "./images/chrobak1.jpg";
import a2 from "./images/chrobak2.jpg";
import a3 from "./images/chrobak3.jpg";
import phyllium from "./images/phyllium.jpg";
import extatosoma from "./images/extatosoma.jpg";
import eurycanta from "./images/eurycanta.jpg";
import sungaya from "./images/sungaya.png";
import dares from "./images/dares.jpg";
import Heteropteryx from "./images/heteropteryx.jpg";
import Phaenopharos from "./images/phaenopharos.jpg";
import mantis from "./images/mantis.png";

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
    fontSize: 20,
    textAlign: "left",
    fontFamily: "RobotoCondensedB",
    color: "#136d23",
  },

  text: {
    fontSize: 19,
    textAlign: "left",
    color: theme.text.primary.main,
    [theme.breakpoints.down("md")]: {
      padding: 0,
      fontSize: 19,
    },
  },
}));
const Chrobaky = ({ state }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const chrobaky = {
    0: {
      title: "Phyllium giganteum",
      image: phyllium,
      text1:
        "Phyllium giganteum alebo listovka, je hmyz patriaci medzi strašilky. Pochádza z tropických pralesov Malajzie. Tento hmyz je obľúbený kvôli svojej prirodzenej schopnosti mimikri. Nehybnosťou, tvarom a sfarbením vyzerajú na nerozoznanie od živého listu. V umelom odchove nájdete v drvivej väčšine len samičky, ktoré dorastajú 12 cm, majú nefunkčné krídla a množia sa partenogenézou (nepotrebujú samčeka). Z nakladených vajíčok sa vo vhodných podmienkach, zhruba po pol roku, liahnu nymfy. Tie sa zvliekajú 6x, kým dosiahnu dospelosť, čo trvá približne trištvrte roka. Dospelá samička sa dožíva 6 až 9 mesiacov. Samček je rarita. Dorastá 8 cm, má podlhovastý tvar, v dospelosti má funkčné krídla a dožíva sa výrazne menej ako samičky. ",
      text2:
        "Chov je relatívne nenáročný, ako u väčšiny strašiliek.. Dôležité je vhodné insektárium, vlhkosť a potrava. Bežná izbová teplota je pre tento druh vyhovujúca. Listovky je najideálnejšie kŕmiť zelenými listami černíc. V zime sa to môže zdať náročné, ale ak si v lete vyhliadnete bohaté stanovisko černičia, v zime nebudete mať žiadny problém. Frekvencia výmeny černicových listov závisí na počte listoviek, ale ak im ho poskytnete dostatok, tak je to v zime dvakrát týždenne a po zvyšok roka ho stačí meniť za čerstvé raz za 7 dní. Listy černičia a voda, v ktorej sú, často stačia na udržanie optimálnej vlhkosti, no podľa potreby je možné ju zvýšiť rosením stien insektária. ",
    },
    1: {
      title: "Extatosoma tiaratum",
      image: extatosoma,
      text1:
        "Extatosoma tiaratum je strašilka endemicky sa vyskytujúca v Austrálií. Živia sa tu eukalyptom a dosahujú väčších rozmerov ako v našich podmienkach. Samičky môžu dorásť až 20 cm, majú zatočený abdomen, zakrpatené krídla a dožívajú sa 18 mesiacov. Ich typický vzhľad a kývavé pohyby im umožňujú splynúť s porastom. Rozmnožujú sa pohlavne, ale v neprítomnosti samčekov a v umelom odchove aj nepohlavne. Vajíčka kladú samičky z vyšších miest “rozhadzovaním” po okolí. Môžete ich počuť, ako klopkajú o steny insektária. O pol roka, niekedy aj dlhšiu dobu, sa z nich liahnu nymfy, ktoré sa svojim vzhľadom maskujú ako mravec. Postupným zvliekaním sa v priebehu pár mesiacov premenia na dospelé jedince. Výskyt samčekov v odchove je skôr výnimočný. Dorastajú 11 cm, dožívajú sa cca pol roka a sú slabšej konštitúcie. ",
      text2:
        "Ich chov sa v mnohom podobá na chov listoviek. Insektárium by malo zodpovedať väčším rozmerom tohto hmyzu. Extatosomy sa v našich podmienkach zvyčajne živia listami černíc. Teplota im vyhovuje izbová (20-25 °C), vlhkosť je možné udržiavať aj občasným rosením. ",
    },
    2: {
      title: "Eurycantha calcarata",
      image: eurycanta,
      text1:
        "Eurycantha calcarata, strašilka prirodzene vyskytujúca sa v tropických lesoch Novej Guiney, Novej Kaledónie a Šalamúnových ostrovoch. Sú obrnené, hrotnaté, mať ich v sajdkáre vášho Harleya by vyzeralo drsne. Samičky dorastajú 14 cm, majú mohutné telo, zakrpatené krídla, rozmnožujú sa pohlavne aj nepohlavne. Vajíčka sa liahnu približne za 6 mesiacov a za niekoľko mesiacov, zvliekajúce sa nymfy prechádzajúce rôznymi farebnými fázami, dospievajú. Samček je len o niečo menší ako samička. V ohrození dokážu nepríjemne “kopať”. Ich krídla sú taktiež nefunkčné. Dožívajú sa približne jeden a pol roka. ",
      text2:
        "Chov sa nelíši od chovu ostatných strašiliek, okrem ich nárokov na vlhkosť, ktorá je menšia.",
    },
    3: {
      title: "Sungaya inexpectata",
      image: sungaya,
      text1:
        "Sungaya inexpectata - je druh strašilky pomenovaný podľa miesta na Filipínach, kde bola objavená a podľa prekvapenia svojho objaviteľa, ktoré v ňom vyvolala - inexpectata z latinčiny - neočakávaný. Asi vďaka svojej kamufláži vydržali existovať neobjavené, až do roku 1995, aj to našli len samičky, preto sa dlho predpokladalo, že je tento druh nepohlavná populácia. Samčeky porazili samičky v hre na schovávačku o celých 13 rokov. V roku 2008 teda bola objavená pohlavná populácia, ktorá sa odlišuje farebne. Samičky dosahujú 8,5 cm, rozmnožujú sa pohlavne aj nepohlavne, nemajú krídla, sú podlhovasté, hnedej farby rôznych odtieňov. Vajíčka kladú z výšky na substrát. Dvojcentimetrové nymfy sa za vhodných podmienok liahnu asi po 4-6 mesiacoch. Z neoplodnených vajíčok bývajú nymfy svetlohnedej farby, z oplodnených bývajú tmavošedé, no počas rastu a zvliekania hrajú mnohými odtieňmi hnedej, zelenej a šedej. Dospievajú približne v 4 mesiacoch. Samčeky dosahujú 5 cm, sú štíhle a taktiež nemajú krídla. ",
      text2:
        "Strašilky chováme v insektáriu, ktoré má na výšku aspoň 30 cm. Vyhovujúce teploty sú 22-27 °C. Vlhkosť by mala byť udržiavaná vlhkým substrátom, zeleným lístím, ktoré majú ako potravu, prípadne rosením. Sungaye majú v prírode celkom rozsiahly jedálny lístok, ale  v našich podmienkach  sú  kŕmené černičím, zmenu by nemuseli znášať dobre. Rozmaznali sme ich.  ",
    },
    4: {
      title: "Dares validipsinus",
      image: dares,
      text1:
        "Dares validipsinus - prvé umelo odchované strašilky v Európe rodu Dares. Pochádzajú zo severozápadnej oblasti ostrova Borneo. Žijú v najnižších etážach tamojších lesov. Cez deň sa schovávajú na spodnej strane listov a v kôre stromov. Svojim vzhľadom a správaním imitujú časti rastlín. Samičky dorastajú 4-5 cm, rozmnožujú sa pohlavne, kladú 2 až tri vajíčka za týždeň, z ktorých sa za 4-6 mesiacov liahnu červenohnedé nymfy dlhé 1,5 cm, postupne sa zvliekajú a dospelosť dosahujú približne za rok. Dospelé samičky sa niekedy dožívajú až dva roky. Samčeky sú o niečo menšie, majú po tele viac výbežkov a o niečo dlhšie tykadlá. Dožívajú sa menej ako samičky. ",
      text2:
        "Chov tohto druhu je nenáročný. Minimálna výška insektária by mala byť 20 cm a celkový objem by mal byť prispôsobený počtu strašiliek. Teplota im vyhovuje izbová, okolo 22 °C, vlhkosť by mala byť udržiavaná občasným rosením, aby bol substrát vlhký, ale nie mokrý. Ako potrava výborne poslúžia čerstvé černicové listy. ",
    },
    5: {
      title: "Heteropteryx dilatata",
      image: Heteropteryx,
      text1:
        "Heteropteryx dilatata - je zaujímavý nočný hmyz pochádzajúci z dažďových pralesov Majského polostrova v juhovýchodnej Ázií a ostrova Borneo. U tohto druhu je výrazný pohlavný dimorfizmus. Samičky patria so svojou úctyhodnou dĺžkou až 17 cm, medzi najväčšie a najťažšie strašilky. Majú dva páry zakrpatených nefunkčných krídel. Dožívajú sa 6 až (výnimočne) 24 mesiacov. Z vajíčok, nakladených do substrátu, sa liahnu za 7-14 mesiacov béžové nymfy. Počas zvliekania postupne menia farbu, po treťom zvleku sú samičky zelené. Zvláštnosťou je, že nymfy dokážu zmeniť odtieň na svetlejší počas dňa a na noc tmavnú. Do štvrtého zvleku sa ku spánku ukladajú v skupinkách. Po roku od vyliahnutia, sa stáva z nymfy imágo. Samčeky sú štíhlejšie, dosahujú 9-13 cm a majú výrazne väčšie krídla. Nymfy samčekov počas zvliekania tmavnú.",
      text2:
        "Chov týchto gigantov nie je odlišný od chovu iných strašiliek. Veľkosť insektária musí zodpovedať ich rozmerom a ich počtu. Izbová teplota je ideálna. Vlhkosť je prirodzene udržiavaná ich zelenou potravou a občasným rosením, ktoré má udržiavať substrát vlhký, no nie mokrý. Černicové listy sú vhodnou stravou aj u tohto hmyzu. ",
    },
    6: {
      title: "Phaenopharos khaoyaiensis",
      image: Phaenopharos,
      text1:
        "Strašilky pochádzajúce z dažďových pralesov Thajska a Bangladéša. Tento druh je na nerozoznanie od vetvičiek a konárikov stromov. Keď je nebezpečenstvo neodvrátiteľné pomocou mimikri, vytasia svoju tajnú zbraň - mini-pidi sýto červené krídelká. Samičky dorastajú 14 cm. V zajatí sa množia zatiaľ výhradne partenogenézou, pretože samčekovia sa prakticky nevyskytujú. Je predpoklad, že v prírode sa množia aj pohlavne. Vajíčka kladú z výšky na substrát, z nich sa za 4-6 mesiacov liahnu nymfy, ktoré sa ďalej zvliekajú a približne za pol roka dospievajú. Dospelé samičky potom žijú ďalších 10 mesiacov. Samčeky sa v zajatí nevyskytujú a nie je o nich toho veľa známe.",
      text2:
        "Insketárium je nutné prispôsobiť ich rozmerom a počtu. Darí sa im pri izbovej teplote, ktorá by sa nemala klesnúť pod 18 °C, 20-25 °C je optimálne. Vlhkosť je udržiavaná vďaka jedlým rastlinám v insektáriu a občasnému roseniu. Je vhodné kŕmiť tento hmyz černicovými listami. ",
    },
    7: {
      title: "Sphodromantis lineola",
      image: mantis,
      text1:
        "Sphodromantis lineola - alebo africká modlivka, je v našej zoo najčerstvejší prírastok. Pochádza zo Subsaharskej Afriky. Je to obľúbený doma chovaný hmyz, vďaka svojej veľkosti a predátorským schopnostiam. Vo voľnej prírode lovia rôzny hmyz, ale dokážu usmrtiť aj malé stavovce. Väčšinou sú zelenej farby, ale vyskytujú sa aj varianty rôznych odtieňov hnedej, ktoré môžu mať fialové oči. Samičky dorastajú 8 cm, sú mohutné a majú krídla končiace zároveň s bruškom. Na rozmnožovanie potrebujú samčeka, feromóny a precízny tykadlový tanec, aby boli pre samčeka atraktívne. Modlivky sú známe postkopulačným (ale aj prachobyčajným) kanibalizmom, ktorý vyplýva z nedostatku potravy a vysokej spotreby energie na rozmnožovanie. Ak chceme, aby samček prežil, musí byť samička sýta a samček po splnení jeho úlohy, promptne zachránený z partnerkinho dosahu. Samička potom kladie oplodnenú oothecu, ktorá môže obsahovať 40-180 vajíčok. Niekedy ich môže naklásť viac, s menším počtom vajíčok. Je to náročný proces a je možné, že samička zakrátko uhynie. Za 2-4 mesiace sa liahnu malé modlivky. Sú drobné, krehké a kanibalistické. V prvých dňoch ich veľa uhynie alebo budú zožraté súrodencami. Na minimalizáciu kanibalizmu je vhodné kŕmiť ich vo veľkom octomilkami a ešte pred vyliahnutím im zabezpečiť možnú disperziu po odchovni. Za 1-1,5 mesiaca dosiahnu tretí až štvrý zvlek. V tomto veku sú umiestňované do vlastného insektária, ktoré bude ich trvalý domov. Kým nymfa dosiahne dospelosť, môže sa zvliekať až 30 krát. Dospelé samičky sa dožívajú jedného roka. Samčeky sú útlejšie, majú dlhšie krídla a život plný rizík. Dĺžka jeho života závisí od využitia a rýchlych reflexov chovateľa. ",
      text2:
        "Chov tohto druhu modliviek nie je náročný. Základom je súkromné insektárium vhodných rozmerov, pre každého jedinca. Keby boli chované v skupinách, časom by sa z davu stala sólo modlivka. Prijateľná teplota je okolo 22-25 °C, pričom v noci môže byť nižšia. Vlhkosť stačí udržiavať rosením 2x do týždňa, aby sa modlivka mohla napiť. Živiť sa môžu rôznymi druhmi hmyzu, napríklad švábmi alebo cvrčkami … alebo inými modlivkami. ",
    },
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <>
            <Grid
              item
              direction="row"
              style={{
                width: "100%",
                justifyContent: "left",
                display: "flex",
                position: "relative",
              }}
            ></Grid>
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
                  src={chrobaky[value].image}
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
                {chrobaky[value].text1}
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
                {chrobaky[value].text2}
              </p>
            </Grid>
          </>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  console.log(value);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
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
          <div>
            {!isMobile && (
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
            )}
          </div>{" "}
          <Grid
            item
            xs="auto"
            style={{ justifyContent: "left", flexGrow: 1, margin: 20 }}
          >
            <Grid
              direction="column"
              container
              spacing={3}
              style={{ margin: 20, padding: 12 }}
            >
              <h1 className={classes.Welcome}>Exotický hmyz</h1>
              <Tabs
                value={value}
                onChange={(ev, val) => setValue(val)}
                TabIndicatorProps={{ display: "none", color: "red" }}
              >
                <Tab
                  label="Phyllium giganteum"
                  className={classes.title}
                  {...a11yProps(0)}
                />
                <Tab
                  label="Extatosoma tiaratum"
                  className={classes.title}
                  {...a11yProps(1)}
                />
                <Tab
                  label="Eurycantha calcarata"
                  className={classes.title}
                  {...a11yProps(2)}
                />
                <Tab
                  label="Sungaya inexpectata"
                  className={classes.title}
                  {...a11yProps(3)}
                />
                <Tab
                  label="Dares validipsinus"
                  className={classes.title}
                  {...a11yProps(4)}
                />
                <Tab
                  label="Heteropteryx dilatata"
                  className={classes.title}
                  {...a11yProps(5)}
                />
                <Tab
                  label="Phaenopharos khaoyaiensis"
                  className={classes.title}
                  {...a11yProps(6)}
                />
                <Tab
                  label="Sphodromantis lineola"
                  className={classes.title}
                  {...a11yProps(7)}
                />
              </Tabs>{" "}
              <TabPanel value={value} index={value}></TabPanel>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Chrobaky;
