import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import useFormValidation from "./useFormValidation";
import validateFormWarning from "./validateFormWarning";

export default function PaymentForm({
  handleBlur,
  handleChange,
  handleSubmit,
  values,
  errors,
  isSubmitting,
  setPayment,
  payment
}) {
  

  const handleRadioChange = (event) => {
    setPayment(event.target.value);
  };
  
  

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Spôsob platby
      </Typography>
      <RadioGroup
        aria-label="Spôsob platby"
        name="Spôsob platby"
        value={payment}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          value="dobierka"
          control={<Radio color="primary" />}
          label="Dobierka ( +2€ )"
        />
        <FormControlLabel
          value="prevod na účet"
          control={<Radio color="primary" />}
          label="Prevod na účet"
        />
      </RadioGroup>
      {/*payment === "platba kartou" && (
        <Grid container spacing={3}>
          {<Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Meno na karte" fullWidth autoComplete="cc-name" 
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.cardName}/>
        </Grid>}
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              name="cardNumber"
              label="Card number"
              helperText="16 miestne číslo vašej karty"
              fullWidth
              autoComplete="cc-number"
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.cardNumber}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              name="expDate"
              label="Dátum platnosti"
              helperText="Dátum platnosti vo formáte MM/RR napr. 12/21"
              fullWidth
              autoComplete="cc-exp"
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.expDate}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              name="cvv"
              label="CVV"
              helperText="3 číslice na zadnej strane vašej karty"
              fullWidth
              autoComplete="cc-csc"
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.cvv}
            />
          </Grid>
        </Grid>
      )*/}
    </React.Fragment>
  );
}
