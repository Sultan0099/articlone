const validate = (values) => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = "Please Enter FirstName";
    } else if (values.firstName.length < 3 || values.firstName.length > 15) {
        errors.firstName = "First Name should between 3 to 15 characters"
    }

    if (!values.lastName) {
        errors.lastName = "Please Enter lastName";
    } else if (values.lastName.length < 3 || values.lastName.length > 15) {
        errors.lastName = "lastName should between 3 to 15 characters"
    }

    if (!values.purposeToJoin) {
        errors.purposeToJoin = "Please Enter purposeToJoin"
    } else if (values.purposeToJoin.length < 20 || values.purposeToJoin.length > 150) {
        errors.purposeToJoin = "It should consist of 20 to 150 characters"
    }

    return errors;
}

export default validate;