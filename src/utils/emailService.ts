import nodemailer, { Transporter } from 'nodemailer';
import mg from "nodemailer-mailgun-transport";

import keys from '../config/keys';

export default class EmailService {
    private _transporter: Transporter;

    constructor() {
        this._transporter = nodemailer.createTransport(mg({ auth: { api_key: keys.mgApiKey || '', domain: keys.mgDomain } }))
    }

    sendMail(to: string, subject: string, content: string)
        : Promise<void> {
        let options = {
            from: 'Articlone@articlone.com',
            to,
            subject,
            text: content
        }

        return new Promise<void>(
            (resolve: (msg: any) => void,
                reject: (err: Error) => void) => {
                this._transporter.sendMail(
                    options, (error, info) => {
                        if (error) {
                            console.log(`error: ${error}`);
                            reject(error);
                        } else {
                            console.log(`Message Sent ${info}`);
                            resolve(`Message Sent ${info.response}`);
                        }
                    });
            }
        );
    }
}


