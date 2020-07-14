import React from 'react'

export default function FlashMessage(props){
    return(
        <div>
            {props.message}
        </div>
    )
}

Error.defaultProps ={
    message: 'An error occurred'
}