import React from 'react'

import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

import Divider from "@material-ui/core/Divider"
import clsx from 'clsx';
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"

import Personal from "./Personal";
import Contact from "./Contact";
import Business from "./Business";

import profileStyles from './styles';
import useForm from "../../hooks/useForm";
import validate from "./validator"

export default function ProfileForm() {
    const classes = profileStyles();
    const profile = useSelector(state => state.auth.profile);

    const submit = () => createProfile();
    const { handleChange, handleSubmit, values, errors, isSubmitting, } = useForm({
        firstName: '',
        lastName: '',
        gender: '',
        businessType: '',
        businessName: '',
        businessWebsite: '',
        purposeToJoin: '',
        address: '',
        city: '',
        zipOrPostal: '',
        country: '',
        phoneNo: ''

    }, submit, validate);
    const createProfile = async () => {
        console.log("errors", errors)
        console.log(values)
    }

    if (profile) return <Redirect to='/' />

    return (
        <>
            <Typography component="h1" variant="h2" className={classes.textCenter}> Setup Your Profile </Typography>
            <div className={classes.formWrapper}>
                <Personal values={values} errors={errors} handleChange={handleChange} />

                <Typography variant="h4" className={clsx(classes.textLeft, classes.m_top)}> Contact Info </Typography>
                <Divider />
                <Contact values={values} errors={errors} handleChange={handleChange} />
                <Typography variant="h4" className={clsx(classes.textLeft, classes.m_top)}> Business Info (Optional) </Typography>
                <Divider />
                <Business values={values} errors={errors} handleChange={handleChange} />

                <Button type="button" onClick={handleSubmit} className={classes.m_top} color="primary" variant="contained" fullWidth size="large"> Submit </Button>

            </div>

        </>
    )
}
