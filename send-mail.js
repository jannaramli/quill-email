const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const details = require("./sender-email.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.listen(3000, () => {console.log("port 3000");});
app.get("/", (req, res) => {res.send("<h1>Engkau Jodohku.co</h1>");});

app.post("/dialog-calendar-multiple", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has been send: ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: details.email, 
    to: user.to, 
    subject: user.subject, 
    html: "html.email",
  };

  let info = await transporter.sendMail(mailOptions);
  callback(info);
}