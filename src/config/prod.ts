

export default {
  MONGO_URI: process.env.MONGO_URI,
  MONGO_URI_SESSION_STORE: process.env.MONGO_URI_SESSION_STORE,
  JWT_SECRET: process.env.JWT_SECRET,
  mgApiKey: process.env.MAILGUN_API_KEY,
  mgDomain: process.env.MAILGUN_DOMAIN,
  JWT_ACC_ACTIVE: process.env.JWT_ACC_ACTIVE,
  SESSION_SECRET: process.env.SESSION_SECRET,
  JWT_FORGET_PASS: process.env.JWT_FORGET_PASS,
  JWT_ISSUER: process.env.JWT_ISSUER,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN,
  ARTICLONE_MAIL: process.env.ARTICLONE_MAIL,
  ARTICLONE_PASS: process.env.ARTICLONE_PASS,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK: process.env.GOOGLE_CALLBACK,
  firebaseConfig: {
    apiKey: process.env.FIREBASE_API,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE,
    messagingSenderId: process.env.FIREBASE_MESSAGE,
    appId: process.env.FIREBASE_APP_ID
  }
};
