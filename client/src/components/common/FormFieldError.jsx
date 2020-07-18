import React from 'react'

function InputError({ errorText }) {
    if (errorText) {
        return (
            <span style={{ color: 'red', fontSize: '0.9rem' }}> {errorText} </span>
        )
    } else {
        return null
    }
}


export default React.memo(InputError)