import jwt from "jsonwebtoken";

import keys from '../config/keys';

async function assignUserToken(payload: string | object) {
    try {
        return await jwt.sign(payload, keys.JWT_SECRET, {
            issuer: keys.JWT_ISSUER,
            expiresIn: '12h'
        })
    } catch (err) {
        throw new Error("JWT error : can't able to assign token ");
    }
}

async function verifyUserToken(token: string) {
    try {
        return await jwt.verify(token, keys.JWT_SECRET);
    } catch (err) { throw new Error("JWT error : can't verify user token") }
}

async function assignEmailActivationToken(payload: string | object | Buffer): Promise<string> {
    try {
        return await jwt.sign(payload, keys.JWT_ACC_ACTIVE, {
            issuer: keys.JWT_ISSUER,
            expiresIn: '12h',
        })
    } catch (err) {
        throw new Error("JWT error : can't able to assign token ");
    }

}


async function verifyEmailActivationToken(token: string) {
    try {

        return await jwt.verify(token, keys.JWT_ACC_ACTIVE);
    } catch (err) { throw new Error("JWT error : can't verify email token") }
}

async function assignForgetPasswordToken(payload: string | object | Buffer): Promise<string> {
    try {
        return await jwt.sign(payload, keys.JWT_FORGET_PASS, {
            issuer: keys.JWT_ISSUER,
            expiresIn: '12h',
        })
    } catch (err) {
        throw new Error("JWT error : can't able to assign token ");
    }

}

async function verifyForgetPasswordToken(token: string) {
    try {
        return await jwt.verify(token, keys.JWT_FORGET_PASS);
    } catch (err) { throw new Error("JWT error : can't verify email token") }
}


export default { assignEmailActivationToken, verifyEmailActivationToken, assignUserToken, verifyUserToken, assignForgetPasswordToken, verifyForgetPasswordToken }
