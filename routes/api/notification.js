const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

async function sendMail() {
  try {
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: "favian10@ethereal.email",
        pass: "ucxBR9an6XcMezsCQG"
      }
    });

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" favian10@ethereal.email', // sender address
      to: "youshalaby@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>" // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    console.log('Receipient:',info.accepted[0])
    return info.accepted[0];
  } catch (error) {
    console.log("Error:", error);
  }
}

router.get("/send", async (req, res) => {
  const message =await sendMail();
  console.log('message',message)
  return res.json({ message: message });
});

module.exports = router;
