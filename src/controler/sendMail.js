import config from "../config.js";
import nodemailer from "nodemailer";
import path from "path";

const sendMail = async (req, res) => {
  const { to, subject, html } = req.body;
  const __dirname = path.resolve();
  const transporter = nodemailer.createTransport(config.mailConfig);

  const info = await transporter.sendMail({
    from: '"Krepšinio Treneris" <krepsinio@treneriai.com>',
    to,
    subject,
    html,
    attachments: [
      {
        filename: "LKTAnew.png",
        path: `${__dirname}/src/LKTAnew.png`,
        cid: "LKTAnew",
      },
    ],
  });

  return res.send({ msg: `Email sent`, id: info.messageId });
};

export default sendMail;
