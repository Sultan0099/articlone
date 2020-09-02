const validate = (values) => {
    const errors = {}
    if (!values.title) {
        errors.title = "Please Enter title";
    }

    if (!values.description) {
        errors.description = "Please Enter description";
    }

    return errors;
}

export default validate;