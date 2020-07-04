import jwt from "jsonwebtoken";

import keys from '../config/keys';


async function assignUserToken(payload: string | object) {
    try {
        return await jwt.sign(payload, keys.JWT_SECRET, {
            issuer: "Articlone",
            expiresIn: '12h'
        })
    } catch (err) {
        throw new Error("JWT error : can't able to assign token ");
    }
}

async function verifyUserToken(token: string) {
    try {
        return await jwt.verify(token, keys.JWT_SECRET);
    } catch (err) { throw new Error("JWT error") }
}

async function assignEmailActivationToken(payload: string | object | Buffer): Promise<string> {
    try {
        return await jwt.sign(payload, keys.JWT_ACC_ACTIVE, {
            issuer: 'Articlone',
            expiresIn: '12h',
        })
    } catch (err) {
        throw new Error("JWT error : can't able to assign token ");
    }

}


async function verifyEmailActivationToken(token: string) {
    try {

        return await jwt.verify(token, keys.JWT_ACC_ACTIVE);
    } catch (err) { throw new Error("JWT error") }
}

export default { assignEmailActivationToken, verifyEmailActivationToken, assignUserToken, verifyUserToken }