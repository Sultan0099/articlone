import mongoose, { Error } from 'mongoose';

import keys from './keys';

const dbConnection = async () => {

    try {
        await mongoose.connect(keys.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        console.log('database is connected');
    } catch (err) { console.log('database err ', err) }

}

export default dbConnection; 