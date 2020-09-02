
const validate = (values) => {
    const errors = {}
    console.log(values)
    if (!values.usernameOrEmail) {
        errors.usernameOrEmail = "Please Enter username or email";
    }

    if (!values.password) {
        errors.password = "Please Enter password";
    }

    return errors;
}

export default validate;