import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function AddressForm({ values, errors, handleChange, handleBlur }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Adresa doručenia
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            required
            id="name"
            name="name"
            label="meno"
            fullWidth
            autoComplete="given-name"
            error={errors.name}
            helperText={errors.name}
            value={values.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            required
            id="surname"
            name="surname"
            label="Priezvisko"
            fullWidth
            autoComplete="family-name"
            error={errors.surname}
            helperText={errors.surname}
            value={values.surname}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            required
            id="address"
            name="address"
            label="Ulica a číslo domu"
            fullWidth
            autoComplete="shipping address-line1"
            error={errors.address}
            helperText={errors.address}
            value={values.address}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            required
            id="city"
            name="city"
            label="Mesto"
            fullWidth
            autoComplete="shipping address-level2"
            error={errors.city}
            helperText={errors.city}
            value={values.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            required
            id="postCode"
            name="postCode"
            label="Poštové čislo"
            fullWidth
            autoComplete="shipping postal-code"
            error={errors.postCode}
            helperText={errors.postCode}
            value={values.postCode}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            required
            id="country"
            name="country"
            label="Krajina"
            fullWidth
            autoComplete="country"
            error={errors.country}
            helperText={errors.country}
            value={values.country}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Tel. číslo"
            fullWidth
            autoComplete="phone number"
            error={errors.phoneNumber}
            helperText={errors.phoneNumber}
            value={values.phoneNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onBlur={handleBlur}
            onChange={handleChange}
            required
            id="email"
            name="email"
            label="e-mail"
            fullWidth
            autoComplete="email"
            error={errors.email}
            helperText={errors.email}
            value={values.email}
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </React.Fragment>
  );
}
