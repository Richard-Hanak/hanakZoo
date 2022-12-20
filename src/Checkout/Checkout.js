import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import NavBar from "../NavBar";
import BottomNav from "../BottomNav";
import useFormValidation from "./useFormValidation";
import validateFormWarning from "./validateFormWarning";
import ReactPixel from "react-facebook-pixel";

const useStyles = makeStyles((theme) => ({
  layout: {
    minHeight: "80vh",
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  label: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      // textAlign: "center"
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: "white",
  },
}));

const stateAddress = {
  name: "",
  surname: "",
  address: "",
  city: "",
  postCode: "",
  country: "",
  email: "",
  phoneNumber: "",
};

const statePayment = {
  //cardName: "",
  cardNumber: "",
  expDate: "",
  cvv: "",
};

const steps = ["Adresa doručenia", "Platobné detaily", "Kontrola objednávky"];

export default function Checkout({ state }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [link, setLink] = React.useState("");
  const [paymentPopup, setPaymentPopup] = React.useState(false);
  const [payment, setPayment] = useState("dobierka");

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const sendConfirmation = () => {
    ReactPixel.track("Purchase", {});
    handleNext();
    let deposit = state
      .map((e) => (e.price - e.rentPrice) * e.rent)
      .reduce((a, b) => a + b);
    let amount = (
      state
        .map((e) => e.buy * e.price + e.rent * e.rentPrice)
        .reduce((a, b) => a + b) + 3.0
    ).toFixed(2);
    let billingcity = values.city;
    let billingcountry = values.country;
    let billingpostcode = values.postCode;
    let billingstreet = values.address;
    let cardholder = values.name + " " + values.surname;
    let currency = "EUR";
    let email = values.email;
    let reference = "123456789";
    let paymentType = payment;

    fetch("/confirm", {
      method: "POST",
      body: JSON.stringify({
        data: {
          deposit,
          amount,
          billingcity,
          billingcountry,
          billingpostcode,
          billingstreet,
          cardholder,
          currency,
          email,
          reference,
          paymentType,
          state,
        },
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((response) => {
      return response.json();
    });
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            values={values}
            errors={errors}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        );
      case 1:
        return (
          <PaymentForm
            values={values1}
            state={state}
            errors={errors1}
            handleChange={handleChange1}
            handleBlur={handleBlur1}
            setPayment={setPayment}
            payment={payment}
          />
        );
      case 2:
        return (
          <Review stateItems={state} stateAddress={values} payment={payment} />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  useEffect(() => {
    if (paymentPopup) {
      let amount = (
        state
          .map((e) => e.buy * e.price + e.rent * e.rentPrice)
          .reduce((a, b) => a + b) + 3.0
      ).toFixed(2);
      let billingcity = values.city;
      let billingcountry = values.country;
      let billingpostcode = values.postCode;
      let billingstreet = values.address;
      let cardholder = values.name + values.surname;
      let currency = "EUR";
      let email = values.email;
      let reference = "123456789";
      let paymentType = 0;

      fetch("/pay", {
        method: "POST",
        body: JSON.stringify({
          data: {
            amount,
            billingcity,
            billingcountry,
            billingpostcode,
            billingstreet,
            cardholder,
            currency,
            email,
            reference,
            paymentType,
          },
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(JSON.parse(response).data);
          setLink(JSON.parse(response).data);
        });
    }
  }, [paymentPopup]);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://mapi.trustpay.eu/mapi5/Scripts/TrustPay/popup.js";
    script.async = true;

    document.body.appendChild(script);

    /*  return () => {
      document.body.removeChild(script);
    }*/
  }, []);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(stateAddress, validateFormWarning, handleNext);

  const {
    handleBlur: handleBlur1,
    handleChange: handleChange1,
    handleSubmit: handleSubmit1,
    values: values1,
    errors: errors1,
    isSubmitting: isSubmitting1,
  } = useFormValidation(
    statePayment,
    validateFormWarning,
    handleNext,
    "payment"
  );
  if (paymentPopup) {
    //console.log(`${baseUrl}?AccountId=${accountId}&Amount=${amount}&Currency=${currency}&Reference=${encodeURIComponent(reference)}&PaymentType=${paymentType}&Signature=${snature}&BillingCity=${billingcity}&BillingCountry=${billingcountry}&BillingPostcode=${billingpostcode}&BillingStreet=${billingstreet}&CardHolder=${cardholder}&Email=${email}`)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <main className={classes.layout}>
        {/*  <div onClick={() => setPaymentPopup(true)}>
          <button className="show-popup">aa</button>
        </div>
        <iframe
          id="TrustPayFrame"
          sandbox="allow-top-navigation allow-popups allow-scripts allow-forms"
          //"{0}?AccountId={1}&Amount={2:0.00}&Currency={3}&Reference=                                                   
          {4}&PaymentType={5}&Signature={6}&BillingCity={7}&BillingCountry={8}                                             
           &BillingPostcode={9}&BillingStreet={10}&CardHolder={11}&Email={12}"
          src={link}
        ></iframe>*/}

        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Platba
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel className={classes.label}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Ďakujeme za objednávku
                </Typography>
                <Typography variant="subtitle1">
                  Ďakujeme za vašu objednávku. O jej potvrdení a odoslaní vás
                  budeme informovať.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      color="primary"
                      className={classes.button}
                      variant="contained"
                    >
                      Späť
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={
                      activeStep == 0
                        ? () => handleSubmit()
                        : activeStep == 1
                        ? () => handleNext()
                        : activeStep == steps.length - 1
                        ? () => sendConfirmation()
                        : null
                    }
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Objednať" : "Ďalej"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
      <BottomNav />
    </React.Fragment>
  );
}
