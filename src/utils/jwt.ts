import jwt from "jsonwebtoken";

import keys from '../config/keys';

function assignToken(payload: string | object, secret: string, options: object): string | null {
    let token: string | null = null;
    jwt.sign(payload, secret, options, function (err, jwtToken) {
        if (err) return console.log(err)
        if (jwtToken) token = jwtToken;
    });

    return token;
}

async function assignEmailActivationToken(payload: string | object | Buffer): Promise<string> {
    try {
        return await jwt.sign(payload, keys.JWT_ACC_ACTIVE, {
            issuer: 'Articlone',
            expiresIn: '12h',
        })
    } catch (err) {
        throw new Error("JWT error : can't able to assign token ")
    }

}


async function verifyEmailActivationToken(token: string) {
    try {

        return await jwt.verify(token, keys.JWT_ACC_ACTIVE);
    } catch (err) { throw new Error("JWT error") }
}

export default { assignEmailActivationToken, verifyEmailActivationToken }