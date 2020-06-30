import { UserErrType } from '../types';

const registerValidator = (
    username: String,
    email: string,
    password: String
) => {
    let errors: UserErrType = {};

    // check name
    if (!username) {
        errors.username = 'username must be provided'
    } else if (username.trim() == "") {
        errors.username = "Please Enter username";
    } else if (username.length < 3 || username.length > 12) {
        errors.username = "username should be between 3 to 12 character long";
    }

    //  check email
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

    if (!email) {
        errors.email = 'Email must be provided'
    } else if (email.trim() == "") {
        errors.email = "please Enter email";
    } else if (!emailRegex.test(email)) {
        errors.email = "Email is inCorrect";
    }

    // check password
    if (!password) {
        errors.password = 'password must be provided'
    } else if (password.trim() == "") {
        errors.password = "Please Enter password";
    } else if (password.length < 6 || password.length > 15) {
        errors.password = "Password should between 6 to 15 character long";
    }

    // check errors object

    return {
        errors,
        isValid: Object.keys(errors).length < 1
    };
};

export default registerValidator;