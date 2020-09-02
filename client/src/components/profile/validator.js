
const validate = (values) => {
    const errors = {}

    const alphaNumRegx = /^[a-zA-Z0-9_]*$/;

    if (!values.firstName) {
        errors.firstName = "Please Enter firstName";
    } else if (values.firstName.length < 3 || values.firstName.length > 15) {
        errors.firstName = "firstName should be between 3 to 12 character";
    } else if (!alphaNumRegx.test(values.firstName)) {
        errors.firstName = 'firstName can only consist of Alphabets , Numbers and underscore '
    }


    if (!values.lastName) {
        errors.lastName = "Please Enter lastName";
    } else if (values.lastName.length < 3 || values.lastName.length > 15) {
        errors.lastName = "lastName should be between 3 to 12 character";
    } else if (!alphaNumRegx.test(values.lastName)) {
        errors.lastName = 'lastName can only consist of Alphabets , Numbers and underscore '
    }


    if (!values.gender) {
        errors.gender = "Please select gender";
    }

    if (!values.purposeToJoin) {
        errors.purposeToJoin = "please enter purposeToJoin"
    } else if (values.purposeToJoin < 15 || values.purposeToJoin > 50) {
        errors.purposeToJoin = "Purpose should consist of 15 to 50 characters"
    }

    if (!values.address) {
        errors.address = "please enter address"
    } else if (values.address.length < 3) {
        errors.address = "address should consist of more than 3 characters"
    }

    if (!values.city) {
        errors.city = "please enter city"
    } else if (values.city.length < 3) {
        errors.city = "city should consist of more than 3 characters"
    }
    if (!values.country) {
        errors.country = "please enter country"
    } else if (values.country.length < 3) {
        errors.country = "address should consist of more than 3 characters"
    }

    if (!values.phoneNo) {
        errors.phoneNo = "please enter phoneNo"
    } else if (values.phoneNo.length < 3) {
        errors.phoneNo = "phoneNo should consist of more than 3 characters"
    }

    if (!values.zipOrPostal) {
        errors.zipOrPostal = "please enter zipOrPostal"
    } else if (values.zipOrPostal.length < 3) {
        errors.zipOrPostal = "address should consist of more than 3 characters"
    }




    return errors;
}

export default validate;