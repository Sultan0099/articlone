import React from 'react'

export default function InputError({ errorText }) {
    return (
        <span style={{ color: 'red', fontSize: '0.9rem' }}> {errorText} </span>
    )
}
