const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");
const creds = require("./config");
const crypto = require("crypto");
const ruzenka = "./src/images/fotky/ruzenka/thumbnails/2.jpg";
const angelika = "./src/images/fotky/angelika/thumbnails/3.jpg";
const lejka = "./src/images/fotky/lejka/thumbnails/1.jpg";
const riasenie = "./src/images/fotky/riasenie/thumbnails/1.jpg";
const jazmina = "./src/images/fotky/jasmina/thumbnails/1.png";
const gerdaKay = "./src/images/fotky/gerda/thumbnails/1.jpg";
const ameliaKay = "./src/images/fotky/amelia/thumbnails/3.jpg";
const amelia = "./src/images/fotky/amelia/thumbnails/3.jpg";
const gerda = "./src/images/fotky/gerda/thumbnails/1.jpg";
const kay = "./src/images/fotky/gerda/thumbnails/1.jpg";
const logo = "./src/images/loggo.jpg";

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(process.env.PORT || 8080);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const writeFile = (newData) => {
  const stringifiedData = JSON.stringify(newData);

  fs.writeFile("public/highScore.json", stringifiedData, (error) => {
    if (error) {
      console.log("Write: NOT successful!");
      console.log(error);
    } else {
      console.log("Write: successful!");
    }
  });
};

app.get("/express_backend", (req, res) => {
  let rawdata = fs.readFileSync("public/highScore.json");
  let highScore = JSON.parse(rawdata);
  console.log(highScore);
  res.send(highScore);
});

app.post("/express_backend", (req, res) => {
  res.status(200).send({ status: "OK" });
  writeFile(req.body);
  res.end();
});

const transport = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};
// FIXNUT CHYBY V LINKU
//https://playground.trustpay.eu/mapi5/Card/PayPopup?AccountId=2107324439&Amount=406.90&Currency=EUR&Reference=123456789&PaymentType=0&Signature=49e65459fe2712b8e62ad601bbf833a9aae5d30bfe0da8869310fc9258c7298c&BillingCity=Sasa&BillingCountry=HU&BillingPostcode=96262&BillingStreet=Nova
const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  console.log(req.body);
  const email = req.body.email;
  const message = req.body.message;
  const content = `email: ${email} \n message: ${message} `;

  const mail = {
    from: email,
    to: "jankolovaiva@gmail.com",
    subject: "New Message from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

app.post("/pay", (req, res) => {
  console.log(req.body);
  let baseUrl = "https://playground.trustpay.eu/mapi5/Card/PayPopup";
  let key = "BEzxtodkw5sffjsDRE86XjRRfZKnebvi";
  let accountId = 2107324439;
  let signature = `${accountId}/${req.body.data.amount}/${req.body.data.currency}/${req.body.data.reference}/$req.body.data.{paymentType}/${req.body.data.billingcity}/${req.body.data.billingcountry}/${req.body.data.billingpostcode}/${req.body.data.billingstreet}/${req.body.data.cardholder}/${req.body.data.email}`;
  console.log(req.body.data);
  function generateSignature(payload, key) {
    return crypto.createHmac("sha256", key).update(payload).digest("hex");
  }
  let snature = generateSignature(signature, key);
  let response = `${baseUrl}?AccountId=${accountId}&Amount=${
    req.body.data.amount
  }&Currency=${req.body.data.currency}&Reference=${encodeURIComponent(
    req.body.data.reference
  )}&PaymentType=${
    req.body.data.paymentType
  }&Signature=${snature}&BillingCity=${
    req.body.data.billingcity
  }&BillingCountry=${req.body.data.billingcountry}&BillingPostcode=${
    req.body.data.billingpostcode
  }&BillingStreet=${req.body.data.billingstreet}&CardHolder=${
    req.body.data.cardholder
  }&Email=${req.body.data.email}`;
  res.json(JSON.stringify({ data: response }));
});

app.post("/confirm", (req, res) => {
  console.log(req.body);
  const buy = req.body.data.state.filter((e) => e.buy);
  const rent = req.body.data.state.filter((e) => e.rent);
  const dobierka = req.body.data.paymentType == "dobierka" ? true : false;

  console.log(buy);
  const total =
    req.body.data.paymentType == "dobierka"
      ? (parseFloat(req.body.data.amount) + req.body.data.deposit + 2).toFixed(
          2
        )
      : (parseFloat(req.body.data.amount) + req.body.data.deposit).toFixed(2);
  const images = {
    lp: {
      filename: "loggo.jpg",
      path: logo,
      cid: "lp",
    },
    ruzenka: {
      filename: "2.jpg",
      path: ruzenka,
      cid: "ruzenka",
    },
    angelika: {
      filename: "3.jpg",
      path: angelika,
      cid: "angelika",
    },
    lejka: {
      filename: "1.jpg",
      path: lejka,
      cid: "lejka",
    },
    riasenie: {
      filename: "1.jpg",
      path: riasenie,
      cid: "riasenie",
    },
    jazmina: {
      filename: "1.png",
      path: jazmina,
      cid: "jazmina",
    },
    gerdaKay: {
      filename: "4.jpg",
      path: gerdaKay,
      cid: "gerdaKay",
    },
    gerda: {
      filename: "4.jpg",
      path: gerda,
      cid: "gerda",
    },
    kay: {
      filename: "4.jpg",
      path: kay,
      cid: "kay",
    },
    ameliaKay: {
      filename: "3.jpg",
      path: ameliaKay,
      cid: "ameliaKay",
    },
    amelia: {
      filename: "3.jpg",
      path: amelia,
      cid: "amelia",
    },
  };
  const attachments = [
    {
      filename: "loggo.jpg",
      path: logo,
      cid: "lp",
    },
  ];
  req.body.data.state.map((e) =>
    e.buy > 0 || e.rent > 0 ? attachments.push(images[e.name]) : null
  );
  const productsBuy = buy.map(
    (e) => `<tr>
  <td style="padding-top: 0;">
      <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner" style="border-bottom: 1px solid #eeeeee;">
          <tbody>
              <tr>
                  <td rowspan="4" style="padding-right: 10px; padding-bottom: 10px;">
                      <img style="height: 60px;" src="cid:${
                        e.name
                      }" alt="Product Image" />
                  </td>
                  <td colspan="2" style="font-size: 14px; font-weight: bold; color: #666666; padding-bottom: 5px;">
                      ${
                          e.name == "ruzenka"
                          ? "Ruženka"
                          : e.name == "angelika"
                          ? "Angelika"
                          : e.name == "riasenie"
                          ? "Riasenie"
                          : e.name == "lejka"
                          ? "Lejka"
                          : e.name == "jazmina"
                          ? "Jazmína"
                          : e.name == "gerdaKay"
                          ? "čiapka a nákrčník"
                          : e.name == "gerda"
                          ? "čiapka Gerda"
                          : e.name == "amelia"
                          ? "čiapka Amália"
                          : e.name == "ameliaKay"
                          ? "čiapka a nákrčník"
                          : e.name == "kay"
                          ? "nákrčník Kay"
                          : null
                      }  
                  </td>
              </tr>
              <tr>
                  <td style="font-size: 14px; line-height: 18px; color: #757575; width: 440px;">
                      Množstvo: ${e.buy}
                  </td>
                  <td style="font-size: 14px; line-height: 18px; color: #757575; text-align: right; padding-bottom: 10px;">
                  <b style="color: #666666;">${e.price * e.buy}</b>€
              </td>
              </tr>
              <tr>
                  <td style="font-size: 14px; line-height: 18px; color: #757575;">
                      Kúpa
                  </td>
              </tr>
          </tbody>
      </table>
  </td>
</tr>`
  );

  const productsRent = rent.map(
    (e) => `<tr>
<td style="padding-top: 0;">
    <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner" style="border-bottom: 1px solid #eeeeee;">
        <tbody>
            <tr>
                <td rowspan="4" style="padding-right: 10px; padding-bottom: 10px;">
                    <img style="height: 60px;" src="cid:${
                      e.name
                    }" alt="Product Image" />
                </td>
                <td colspan="2" style="font-size: 14px; font-weight: bold; color: #666666; padding-bottom: 5px;">
                ${
                  e.name == "ruzenka"
                  ? "Ruženka"
                  : e.name == "angelika"
                  ? "Angelika"
                  : e.name == "riasenie"
                  ? "Riasenie"
                  : e.name == "lejka"
                  ? "Lejka"
                  : e.name == "jazmina"
                  ? "Jazmína"
                  : e.name == "gerdaKay"
                  ? "čiapka a nákrčník"
                  : e.name == "gerda"
                  ? "čiapka Gerda"
                  : e.name == "amelia"
                  ? "čiapka Amália"
                  : e.name == "ameliaKay"
                  ? "čiapka a nákrčník"
                  : e.name == "kay"
                  ? "nákrčník Kay"
                  : null
                }
                </td>
            </tr>
            <tr>
                <td style="font-size: 14px; line-height: 18px; color: #757575; width: 440px;">
                    Množstvo: ${e.rent}
                </td>
                <td style="font-size: 14px; line-height: 18px; color: #757575; text-align: right; padding-bottom: 10px;">
                <b style="color: #666666;">${e.rentPrice * e.rent}</b>€
            </td>
            </tr>
            <tr>
                <td style="font-size: 14px; line-height: 18px; color: #757575;">
                    Prenájom
                </td>
            </tr>
        </tbody>
    </table>
</td>
</tr>`
  );

  const theMail = dobierka
    ? ` <head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Email Template for Order Confirmation Email</title>

<!-- Start Common CSS -->
<style type="text/css">
    #outlook a {padding:0;}
    body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0; font-family: Helvetica, arial, sans-serif;}
    .ExternalClass {width:100%;}
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}
    .backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
    .main-temp table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; font-family: Helvetica, arial, sans-serif;}
    .main-temp table td {border-collapse: collapse;}
</style>
<!-- End Common CSS -->
</head>
<body>
<table width="100%" cellpadding="0" cellspacing="0" border="0" class="backgroundTable main-temp" style="background-color: #d5d5d5;">
    <tbody>
        <tr>
            <td>
                <table width="600" align="center" cellpadding="15" cellspacing="0" border="0" class="devicewidth" style="background-color: #ffffff;">
                    <tbody>
                        <!-- Start header Section -->
                        <tr>
                            <td style="padding-top: 30px;">
                                <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner" style="border-bottom: 1px solid #eeeeee; text-align: center;">
                                    <tbody>
                                        <tr>
                                            <td style="padding-bottom: 10px;">
                                                <a href="https://littlepumpkin.sk"><img style="height: 80px;" src="cid:lp" alt="little pumpkin" /></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-size: 14px; line-height: 18px; color: #666666;">
                                            Nová 55
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-size: 14px; line-height: 18px; color: #666666;">
                                            Sása, 962 62
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-size: 14px; line-height: 18px; color: #666666;">
                                            Tel. č.: +421904146671
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <!-- End header Section -->
                        
                        <!-- Start address Section -->
                        <tr>
                            <td style="padding-top: 0;">
                                <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner" style="border-bottom: 1px solid #bbbbbb;">
                                    <tbody>
                                        <tr>
                                            <td style="width: 100%; font-size: 16px; font-weight: bold; color: #666666; padding-bottom: 5px;">
                                                Adresa doručenia 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 100%; font-size: 14px; line-height: 18px; color: #666666;"% >
                                                ${req.body.data.cardholder}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 100%; font-size: 14px; line-height: 18px; color: #666666;">
                                              ${req.body.data.billingstreet}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 100%; font-size: 14px; line-height: 18px; color: #666666; padding-bottom: 10px;">
                                                ${
                                                  req.body.data
                                                    .billingpostcode +
                                                  " " +
                                                  req.body.data.billingcity +
                                                  " " +
                                                  req.body.data.billingcountry
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <!-- End address Section -->
                        
                        <!-- Start product Section -->
                        ${productsBuy.join("")}
                        ${productsRent.join("")}
                        <!-- End product Section -->
                        
                        <!-- Start calculation Section -->
                        <tr>
                            <td style="padding-top: 0;">
                                <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner" style="border-bottom: 1px solid #bbbbbb; margin-top: -5px;">
                                    <tbody>
                                        <tr>
                                            <td style="font-size: 14px; font-weight: bold; line-height: 18px; color: #666666; padding-top: 10px;">
                                                Záloha: 
                                            </td>
                                            <td style="font-size: 14px; font-weight: bold; line-height: 18px; color: #666666; padding-top: 10px; text-align: right;">
                                            ${req.body.data.deposit}€
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-size: 14px; font-weight: bold; line-height: 18px; color: #666666;">
                                                Poštovné + Dobierka:
                                            </td>
                                            <td style="font-size: 14px; font-weight: bold; line-height: 18px; color: #666666; text-align: right;">
                                              5.00€
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-size: 14px; font-weight: bold; line-height: 18px; color: #666666; padding-bottom: 10px;">
                                                Spolu: 
                                            </td>
                                            <td style="font-size: 14px; font-weight: bold; line-height: 18px; color: #666666; text-align: right; padding-bottom: 10px;">
                                                ${total}€
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <!-- End calculation Section -->
                        
                        <!-- Start payment method Section -->
                        <tr>
                            <td style="padding: 0 10px;">
                                <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner">
                                    <tbody>
                                        <tr>
                                            <td colspan="2" style="font-size: 16px; font-weight: bold; color: #666666; padding-bottom: 5px;">
                                                Spôsob platby: ${
                                                  req.body.data.paymentType
                                                } 
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <!-- End payment method Section -->
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
</body>`
    : ` <head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Email Template for Order Confirmation Email</title>

<!-- Start Common CSS -->
<style type="text/css">
    #outlook a {padding:0;}
    body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0; font-family: Helvetica, arial, sans-serif;}
    .ExternalClass {width:100%;}
    .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}
    .backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
    .main-temp table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; font-family: Helvetica, arial, sans-serif;}
    .main-temp table td {border-collapse: collapse;}
</style>
<!-- End Common CSS -->
</head>
<body>
<table width="100%" cellpadding="0" cellspacing="0" border="0" class="backgroundTable main-temp" style="background-color: #d5d5d5;">
    <tbody>
        <tr>
            <td>
                <table width="600" align="center" cellpadding="15" cellspacing="0" border="0" class="devicewidth" style="background-color: #ffffff;">
                    <tbody>
                        <!-- Start header Section -->
                        <tr>
                            <td style="padding-top: 30px;">
                                <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner" style="border-bottom: 1px solid #eeeeee; text-align: center;">
                                    <tbody>
                                        <tr>
                                            <td style="padding-bottom: 10px;">
                                                <a href="https://littlepumpkin.sk"><img style="height: 80px;" src="cid:lp" alt="little pumpkin" /></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-size: 14px; line-height: 18px; color: #666666;">
                                            Nová 55
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-size: 14px; line-height: 18px; color: #666666;">
                                            Sása, 962 62
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-size: 14px; line-height: 18px; color: #666666;">
                                            Tel. č.: +421904146671
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <!-- End header Section -->
                        
                        <!-- Start address Section -->
                        <tr>
                            <td style="padding-top: 0;">
                                <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner" style="border-bottom: 1px solid #bbbbbb;">
                                    <tbody>
                                        <tr>
                                            <td style="width: 100%; font-size: 16px; font-weight: bold; color: #666666; padding-bottom: 5px;">
                                                Adresa doručenia 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 100%; font-size: 14px; line-height: 18px; color: #666666;">
                                                ${req.body.data.cardholder}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 100%; font-size: 14px; line-height: 18px; color: #666666;">
                                              ${req.body.data.billingstreet}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="width: 100%; font-size: 14px; line-height: 18px; color: #666666; padding-bottom: 10px;">
                                                ${
                                                  req.body.data
                                                    .billingpostcode +
                                                  " " +
                                                  req.body.data.billingcity +
                                                  " " +
                                                  req.body.data.billingcountry
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <!-- End address Section -->
                        
                        <!-- Start product Section -->
                        ${productsBuy.join("")}
                        ${productsRent.join("")}
                        <!-- End product Section -->
                        
                        <!-- Start calculation Section -->
                        <tr>
                            <td style="padding-top: 0;">
                                <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner" style="border-bottom: 1px solid #bbbbbb; margin-top: -5px;">
                                    <tbody>
                                        <tr>
                                            <td style="font-size: 14px; font-weight: bold; line-height: 18px; color: #666666; padding-top: 10px;">
                                                Záloha: 
                                            </td>
                                            <td style="font-size: 14px; font-weight: bold; line-height: 18px; color: #666666; padding-top: 10px; text-align: right;">
                                            ${req.body.data.deposit}€
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-size: 14px; font-weight: bold; line-height: 18px; color: #666666;">
                                                Poštovné:
                                            </td>
                                            <td style="font-size: 14px; font-weight: bold; line-height: 18px; color: #666666; text-align: right;">
                                                3.00€
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="font-size: 14px; font-weight: bold; line-height: 18px; color: #666666; padding-bottom: 10px;">
                                                Spolu: 
                                            </td>
                                            <td style="font-size: 14px; font-weight: bold; line-height: 18px; color: #666666; text-align: right; padding-bottom: 10px;">
                                                ${total}€
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <!-- End calculation Section -->
                        
                        <!-- Start payment method Section -->
                        <tr>
                            <td style="padding: 0 10px;">
                                <table width="560" align="center" cellpadding="0" cellspacing="0" border="0" class="devicewidthinner">
                                    <tbody>
                                        <tr>
                                            <td colspan="2" style="font-size: 16px; font-weight: bold; color: #666666; padding-bottom: 5px;">
                                                Spôsob platby: ${
                                                  req.body.data.paymentType
                                                } 
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <!-- End payment method Section -->
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
</body>`;

  const mail = {
    from: "Little Pumpkin",
    to: req.body.data.email,
    subject: "Potvrdenie objenávky",
    attachments: attachments,
    html: theMail,
  };

  const mail2 = {
    from: "Little Pumpkin",
    to: "jankolovaiva@gmail.com",
    subject: "Potvrdenie objenávky",
    attachments: attachments,
    html: theMail,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err)
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
  transporter.sendMail(mail2, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});
