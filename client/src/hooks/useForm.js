import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useForm = (formValues, callBack, validator = null) => {
    const [values, setValues] = useState(formValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {

            callBack(values).then(() => setIsSubmitting(false))
        } else {
            setIsSubmitting(false)
        }
    }, [errors])

    useEffect(() => {
        if (Object.keys(auth.errors).length !== 0) {
            setErrors(auth.errors)
            setIsSubmitting(false)
        }
    }, [auth.errors])



    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = () => {
        if (validator !== null) {
            setErrors(validator(values));
        }
        setIsSubmitting(true)
    }


    const handleBlur = (event) => {
        const { name } = event.target;
        setErrors({
            ...errors,
            [name]: null
        })
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
    }
}

export default useForm; 