import React from "react"

const FormDisplay = (props) => {
    return (
        <div>
            <h2>First Name: {props.fname}</h2>
            <h2>Last Name: {props.lname}</h2>
            <h2>Email: {props.email}</h2>
            <h2>Password: {props.password}</h2>
            <h2>Confirm Password: {props.conpassword}</h2>
        </div>
    )
}

export default FormDisplay