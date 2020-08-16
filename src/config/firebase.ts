import admin from "firebase-admin";

import serviceAccount from '../../serviceAccount.json';


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "articlone.appspot.com"
})

const bucket = admin.storage().bucket();

export { bucket }