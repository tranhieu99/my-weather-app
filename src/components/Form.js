import React from 'react'

export default function Form(props){
    return(
        <form onSubmit = {props.onSubmit}>
            <input name="city" type="text" placeholder = "City" />
            <input name="country" type="text" placeholder = "Country" />
            <button>Get Weather</button>
        </form>
    )
}