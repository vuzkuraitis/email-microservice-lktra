import "dotenv/config.js";

export default {
  port: process.env.PORT,
  password: process.env.PASS,
  mailConfig: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  },
};