import nodemailer, { Transporter } from 'nodemailer';
import mg from "nodemailer-mailgun-transport";

import keys from '../config/keys';

export default class EmailService {
    private _transporter: Transporter;
    private _gmailTransporter: Transporter;

    constructor() {
        this._transporter = nodemailer.createTransport(mg({ auth: { api_key: keys.mgApiKey || '', domain: keys.mgDomain } }))
        this._gmailTransporter = nodemailer.createTransport({ service: 'gmail', auth: { user: keys.ARTICLONE_MAIL, pass: keys.ARTICLONE_PASS } })
    }

    sendMail(to: string, subject: string, content: string)
        : Promise<void> {
        let options = {
            from: 'Articlone@articlone.com',
            to,
            subject,
            html: content
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
    sendMailFromGmail(to: string, subject: string, content: string)
        : Promise<void> {
        let options = {
            from: 'Articlone@noreply.com',
            to,
            subject,
            html: content
        }

        return new Promise<void>(
            (resolve: (msg: any) => void,
                reject: (err: Error) => void) => {
                this._gmailTransporter.sendMail(
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


