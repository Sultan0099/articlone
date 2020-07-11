

export default {
  MONGO_URI: process.env.MONGO_URI,
  MONGO_URI_SESSION_STORE: process.env.MONGO_URI_SESSION_STORE,
  JWT_SECRET: process.env.JWT_SECRET,
  mgApiKey: process.env.MAILGUN_API_KEY,
  mgDomain: process.env.MAILGUN_DOMAIN,
  JWT_ACC_ACTIVE: process.env.JWT_ACC_ACTIVE,
  SESSION_SECRET: process.env.SESSION_SECRET,
  JWT_FORGET_PASS: process.env.JWT_FORGET_PASS,
};
