
const validate = (values) => {
    const errors = {}
    console.log(values)

    const alphaNumRegx = /^[a-zA-Z0-9_]*$/;

    if (!values.username) {
        errors.username = "Please Enter username";
    } else if (values.username.length < 3 || values.username.length > 15) {
        errors.username = "username should be between 3 to 12 character";
    } else if (!alphaNumRegx.test(values.username)) {
        errors.username = 'username can only consist of Alphabets , Numbers and underscore '
    }

    //  check email
    const emailRegx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

    if (!values.email) {
        errors.email = "please Enter email";
    } else if (!emailRegx.test(values.email)) {
        errors.email = "Email is not valid";
    }

    // check password

    if (!values.password) {
        errors.password = "Please Enter password";
    } else if (values.password.length < 8 || values.password.length > 15) {
        errors.password = "Password should between 8 to 20 character long";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Please Enter Confirm Password"
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Confirm password must match to password '
    }
    return errors;
}

export default validate;