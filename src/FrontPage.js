import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import ImageSlider from "./ImageSlider";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {
  useTheme,
  makeStyles,
  ThemeProvider,
  G,
} from "@material-ui/core/styles";
import { Typography, Grid, Button } from "@material-ui/core";
import PageWrapper from "./PageWrapper";
import frontLogo from "./images/logoM.jpg";
import a1 from "./images/front1.jpg";
import a3 from "./images/front3.jpg";
import a2 from "./images/front2.jpg";
import a4 from "./images/terar3.jpg";

//

const API_KEY = "AIzaSyAiUzVJPkyfTkNa5lcDkpSv0DqMaLTj3Gg";
const CALENDAR_ID = "hanak.hmyz@gmail.com";

const images = [
  {
    original: a3,
  },
  {
    original: a1,
  },
  {
    original: a2,
  },
  {
    original: a4,
  },
];

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "RobotoCondensedB",
    color: "#136d23",
    [theme.breakpoints.down("md")]: {
      top: 80,
      padding: 0,
      fontSize: 22,
    },
  },

  text: {
    fontSize: 20,
    textAlign: "center",
    color: theme.text.primary.main,
    [theme.breakpoints.down("md")]: {
      padding: 0,
      fontSize: 19,
    },
  },

  textAlt: {
    fontSize: 18,
    textAlign: "center",
    color: theme.text.primary.main,
    [theme.breakpoints.down("md")]: {
      padding: 0,
      fontSize: 17,
    },
  },

  button: {
    padding: 1,
    paddingLeft: 22,
    paddingRight: 22,
    fontSize: 18,
    textTransform: "none",
  },
}));
const Frontpage = ({ state }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const now = new Date().toISOString();
        const res = await axios.get(
          `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
            CALENDAR_ID
          )}/events?key=${API_KEY}&timeMin=${now}&maxResults=20&singleEvents=true&orderBy=startTime`
        );

        const formattedEvents = res.data.items.map((event) => ({
          title: event.summary,
          start: new Date(event.start.dateTime || event.start.date),
        }));

        setEvents(formattedEvents);
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <PageWrapper images={images}>
      <Grid
        item
        xs="auto"
        style={{
          maxWidth: 800,
        }}
      >
        <Grid
          direction="column"
          container
          spacing={3}
          style={{ alignItems: "center" }}
        >
          <img
            src={frontLogo}
            style={{
              width: "66%",
              display: "block",
              position: "relative",
              //  left: 38,
              top: isMobile ? 0 : -40,
            }}
          />
        </Grid>
        <Grid
          item
          direction="row"
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <h4
            className={classes.title}
            style={{
              position: "relative",
              top: isMobile ? 0 : -48,
              //   right: isMobile ? 0 : -96,
            }}
          >
            Viac ako 20-ročná tradícia v chove exotických druhov plazov a hmyzu
          </h4>
        </Grid>

        {!!events.length &&
          events.map((e) => (
            <>
              <Grid
                item
                direction="row"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <p
                  className={classes.text}
                  style={{
                    paddingTop: isMobile ? 10 : 30,
                    fontWeight: 600,
                  }}
                >
                  Najbližšie sa uvidíme na:
                </p>
              </Grid>
              <Grid
                item
                direction="row"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <p
                  className={classes.textAlt}
                  style={{
                    paddingTop: isMobile ? 10 : 20,
                    fontWeight: 600,
                  }}
                >
                  {`${e.title} - ${moment(e.start).format("DD.MM.YYYY HH:mm")}`}
                </p>
              </Grid>
            </>
          ))}

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
              paddingTop: isMobile ? 70 : events.length ? 60 : 100,
              fontWeight: 600,
            }}
          >
            V posledných rokoch sme rozšírili činnosť o chov a spracovanie
            červov chrobáka rodu Zophobas.
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
              paddingTop: isMobile ? 80 : events.length ? 80 : 160,
            }}
          >
            Chov však nestačí, chceme ponúknuť našim zákazníkom vhodné podmienky
            pre ich hmyzie klenoty, preto po novom ponúkame výrobu terárií,
            podľa Vašich predstáv s ohľadom na ich budúcich obyvateľov
          </p>
        </Grid>
        <Grid
          item
          direction="row"
          spacing={4}
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            marginTop: isMobile ? 60 : 40,
          }}
        >
          <>
            <Link to="/teraria">
              <Button
                onClick={() => {}}
                color="primary"
                className={classes.button}
                style={{ marginRight: 60 }}
                variant="contained"
              >
                Teráriá
              </Button>
            </Link>{" "}
            <Link to="/hmyz">
              <Button
                onClick={() => {}}
                color="primary"
                className={classes.button}
                variant="contained"
              >
                Exotický hmyz
              </Button>{" "}
            </Link>
          </>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Frontpage;
