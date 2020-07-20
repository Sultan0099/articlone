import React, { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"

import { verifyEmailToken } from "../redux/_actions/authAction"

export default function VerifyEmail() {
    const [submittingToken, setSubmittingToken] = useState(true);
    const { token } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(verifyEmailToken(token));
        setSubmittingToken(false);
    }, [dispatch, token])
    // @WORK HAMZA
    // TODO showing some animation shows that token is submitting for good UX
    if (submittingToken) { return <p> submitting...</p> }
    // @WORK HAMZA
    // TODO show user that you are verified 
    return (
        <div>
            Submit successful
        </div>
    )
}
