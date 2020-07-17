import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useForm = (formValues, callBack, validator) => {
    const [values, setValues] = useState(formValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callBack(values);
        }

    }, [errors])

    useEffect(() => {
        if (Object.keys(auth.errors).length !== 0) {
            setErrors(auth.errors)
        }
    }, [auth.errors])
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = () => {
        setErrors(validator(values));
        setIsSubmitting(true)
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting
    }
}

export default useForm; 