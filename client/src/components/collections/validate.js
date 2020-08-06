const validate = (values) => {
    const errors = {}
    console.log(values)
    if (!values.title) {
        errors.title = "Please Enter Title";
    } else if (values.title.length < 10 || values.title.length > 25) {
        errors.title = "title should between 10 to 25 characters"
    }

    if (!values.description) {
        errors.description = "Please Enter description";
    } else if (values.description.length < 25 || values.description.length > 150) {
        errors.description = "description should between 25 to 150 characters"
    }

    return errors;
}

export default validate;