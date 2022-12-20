export default function validateAuth(values, field, ifContact) {
  let errors = {};

  if (ifContact == "payment") {
    if (field === "cardNumber") {
      if (!values.cardNumber) {
        errors.cardNumber = "Správa musí mať aspoň 20 znakov";
      } else if (values.cardNumber.length < 16) {
        errors.cardNumber = "Správa musí mať aspoň 20 znakov";
      } else if (!/\d/.test(values.cardNumber)) {
        errors.cardNumber = "Správa musí mať aspoň 20 znakov";
      }
      return errors;
    } else if (field === "expDate") {
      if (!values.expDate) {
        errors.expDate = "Správa musí mať aspoň 20 znakov";
      } else if (!/^\d{2}\/\d{2}$/.test(values.expDate)) {
        errors.expDate = "Správa musí mať aspoň 20 znakov";
      }
      return errors;
    } else if (field === "cvv") {
      if (!values.cvv) {
        errors.cvv = "Zadajte váš e-mail";
      } else if (!/\d/.test(values.cvv)) {
        errors.cvv = "Zadajte správny formát e-mailu";
      } else if (values.cvv.length < 3) {
        errors.cvv = "Zadajte správny formát e-mailu";
      } else if (values.cvv.length > 3) {
        errors.cvv = "Zadajte správny formát e-mailu";
      }
      return errors;
    } else {
      if (!values.cardNumber) {
        errors.cardNumber = "Správa musí mať aspoň 20 znakov";
      } else if (values.cardNumber.length < 15) {
        errors.cardNumber = "Správa musí mať aspoň 20 znakov";
      } else if (!/\d/.test(values.cardNumber)) {
        errors.cardNumber = "Správa musí mať aspoň 20 znakov";
      }
      if (!values.expDate) {
        errors.expDate = "Správa musí mať aspoň 20 znakov";
      } else if (!/^\d{2}\/\d{2}$/.test(values.expDate)) {
        errors.expDate = "Správa musí mať aspoň 20 znakov";
      }
      if (!values.cvv) {
        errors.cvv = "Zadajte váš e-mail";
      } else if (!/\d/.test(values.cvv)) {
        errors.cvv = "Zadajte správny formát e-mailu";
      } else if (values.cvv.length < 3) {
        errors.cvv = "Zadajte správny formát e-mailu";
      } else if (values.cvv.length > 3) {
        errors.cvv = "Zadajte správny formát e-mailu";
      }
      return errors;
    }
  }
  if (ifContact == "message") {
    if (field === "e-mail") {
      if (!values.mail) {
        errors.mail = "Zadajte váš e-mail";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)
      ) {
        errors.mail = "Zadajte správny formát e-mailu";
      }
      return errors;
    } else if (field === "message") {
      if (!values.message) {
        errors.message = "Správa musí mať aspoň 20 znakov";
      } else if (values.message.length < 19) {
        errors.message = "Správa musí mať aspoň 20 znakov";
      }
      return errors;
    } else {
      if (!values.message) {
        errors.message = "Správa musí mať aspoň 20 znakov";
      } else if (values.message.length < 19) {
        errors.message = "Správa musí mať aspoň 20 znakov";
      }
      if (!values.mail) {
        errors.mail = "Zadajte váš e-mail";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)
      ) {
        errors.mail = "Zadajte správny formát e-mailu";
      }
      return errors;
    }
  } else {
    if (field === "email") {
      if (!values.email) {
        errors.email = "Zadajte váš e-mail";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Zadajte správny formát e-mailu";
      }
      return errors;
    } else if (field === "name") {
      if (!values.name) {
        errors.name = "Zadajte vaše meno";
      } else if (values.name.length < 2) {
        errors.name = "Zadajte vaše meno";
      }
      return errors;
    } else if (field === "surname") {
      if (!values.surname) {
        errors.surname = "Zadajte vaše priezvisko";
      } else if (values.surname.length < 2) {
        errors.surname = "Zadajte vaše priezvisko";
      }
      return errors;
    } else if (field === "address") {
      if (!values.address) {
        errors.address = "Zadajte vaše číslo domu a ulicu";
      } else if (values.address.length < 2) {
        errors.address = "Zadajte vaše číslo domu a ulicu";
      } else if (!/\d/.test(values.address)) {
        errors.address = "Zadajte vaše číslo domu a ulicu";
      }
      return errors;
    } else if (field === "phoneNumber") {
      if (!values.phoneNumber) {
        errors.phoneNumber = "Zadajte vaše telefónne číslo";
      } else if (
        !/[+]?([0-9]){9,}/.test(values.phoneNumber) ||
        values.phoneNumber.length < 9
      ) {
        errors.phoneNumber = "Zadajte správny formát telefónneho čísla";
      }
      return errors;
    } else if (field === "city") {
      if (!values.city) {
        errors.city = "Mesto je povinný udaj";
      } else if (values.city.length < 2) {
        errors.city = "Mesto je povinný udaj";
      }
      return errors;
    } else if (field === "postCode") {
      if (!values.postCode) {
        errors.postCode = "Zadajte vaše poštové číslo";
      } else if (
        !/([0-9]){4,}/.test(values.postCode) ||
        !values.postCode.length == 5
      ) {
        errors.postCode = "Zadajte správny formát poštového čísla";
      }
      return errors;
    } else if (field === "country") {
      if (!values.country) {
        errors.country = "Krajina je povinný udaj";
      } else if (values.country.length < 4) {
        errors.country = "Krajina je povinný udaj";
      }
      return errors;
    } /////////////////////////////////////
    else {
      if (!values.email) {
        errors.email = "Zadajte váš e-mail";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Zadajte správny formát e-mailu";
      }
      if (!values.name) {
        errors.name = "Zadajte vaše meno";
      } else if (values.name.length < 2) {
        errors.name = "Zadajte vaše meno";
      }
      if (!values.surname) {
        errors.surname = "Zadajte vaše priezvisko";
      } else if (values.surname.length < 2) {
        errors.surname = "Zadajte vaše priezvisko";
      }
      if (!values.address) {
        errors.address = "Zadajte vaše číslo domu a ulicu";
      } else if (values.address.length < 2) {
        errors.address = "Zadajte vaše číslo domu a ulicu";
      } else if (!/\d/.test(values.address)) {
        errors.address = "Zadajte vaše číslo domu a ulicu";
      }
      if (!values.city) {
        errors.city = "Mesto je povinný udaj";
      } else if (values.city.length < 2) {
        errors.city = "Mesto je povinný udaj";
      }
      if (!values.phoneNumber) {
        errors.phoneNumber = "Zadajte vaše telefónne číslo";
      } else if (
        !/[+]?([0-9]){9,}/.test(values.phoneNumber) ||
        values.phoneNumber.length < 9
      ) {
        errors.phoneNumber = "Zadajte správny formát telefónneho čísla";
      }
      if (!values.country) {
        errors.country = "Krajina je povinný udaj";
      } else if (
        values.country.length < 4 &&
        typeof values.country !== "string"
      ) {
        errors.country = "Krajina je povinný udaj";
      }
      if (!values.postCode) {
        errors.postCode = "Zadajte vaše poštové číslo";
      } else if (
        !/([0-9]){4,}/.test(values.postCode) ||
        !values.postCode.length == 5
      ) {
        errors.postCode = "Zadajte správny formát poštového čísla";
      }
      return errors;
    }
  }
}
