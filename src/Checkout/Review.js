import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  listItem: {
    fontSize: 40,
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

let names = {
  ruzenka: "Ruženka",
  angelika: "Angelika",
  lejka: "Lejka",
  riasenie: "riasenie",
  jazmina: "Jazmína",
  gerdaKay: "čiapka a nákrčník",
  gerda: "čiapka Gerda",
  kay: "nákrčník Kay"
}

export default function Review({ stateItems, stateAddress, payment }) {
  const [renderRent, setRenderRent] = useState(false);
  useEffect(() => {
    stateItems.map((e) => (e.rent ? setRenderRent(true) : null));
  }, [stateItems]);

  const total = stateItems
    .map((e) => e.buy * e.price + e.rent * e.rentPrice)
    .reduce((a, b) => a + b);
  const deposit = stateItems
    .map((e) => (e.price - e.rentPrice) * e.rent)
    .reduce((a, b) => a + b);
  const dobierka = payment == "dobierka" ? 2 : 0
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Zhrnutie objednávky
      </Typography>
      <List disablePadding>
        {stateItems.map((product) =>
          product.buy ? (
            <ListItem className={classes.listItem} key={product.name}>
              <Typography variant="body2" style={{ paddingRight: 10 }}>
                {product.buy > 1 ? product.buy + "x" : null}
              </Typography>
              <ListItemText primary={names[product.name]} secondary="kúpa" />
              <Typography variant="body2">
                {product.price * product.buy}€
              </Typography>
            </ListItem>
          ) : null
        )}
        {stateItems.map((product) =>
          product.rent ? (
            <ListItem className={classes.listItem} key={product.name}>
              <Typography variant="body2" style={{ paddingRight: 10 }}>
                {product.rent > 1 ? product.rent + "x" : null}
              </Typography>
              <ListItemText primary={names[product.name]} secondary="prenájom" />
              <Typography variant="body2">
                {product.price * product.rent}€
              </Typography>
            </ListItem>
          ) : null
        )}
        <ListItem className={classes.listItem}>
          <ListItemText primary="poštovné" />
          <Typography variant="body2">3.00€</Typography>
        </ListItem>
        {payment == "dobierka" ?
        <ListItem className={classes.listItem}>
          <ListItemText primary="dobierka" />
          <Typography variant="body2">2.00€</Typography>
        </ListItem>:null}
        { renderRent ? 
        <ListItem className={classes.listItem}>
          <ListItemText primary="Záloha" />
          <Typography variant="body2">{deposit}€</Typography>
        </ListItem>: null }
        <ListItem className={classes.listItem}>
          <ListItemText primary="Spolu" />
          <Typography variant="subtitle1" className={classes.total}>
            {(total + 3.00 + deposit + dobierka).toFixed(2)}€
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Adresa doručenia
          </Typography>
          <Typography gutterBottom>
            {stateAddress.name} {stateAddress.surname}
          </Typography>
          <Typography gutterBottom>
            {stateAddress.address}
            <br /> {stateAddress.postCode}, {stateAddress.city}
            <br /> {stateAddress.country}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Spôsob platby
          </Typography>
          <Grid container>
            <Typography gutterBottom>{payment}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
