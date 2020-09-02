const validate = (values) => {
    const errors = {}
    console.log(values)
    if (!values.title) {
        errors.title = "Please Enter Title";
    } else if (values.title.length < 4 || values.title.length > 15) {
        errors.title = "title should between 4 to 15 characters"
    }

    if (!values.description) {
        errors.description = "Please Enter description";
    } else if (values.description.length < 25 || values.description.length > 50) {
        errors.description = "description should between 25 to 50 characters"
    }

    return errors;
}

export default validate;