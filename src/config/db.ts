import mongoose from 'mongoose';

import keys from './keys';

const dbConnection = async () => await mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const sessionDbConnection = () => {
    const connection = mongoose.createConnection(keys.MONGO_URI_SESSION_STORE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    return connection;
}

export default { dbConnection, sessionDbConnection }; 