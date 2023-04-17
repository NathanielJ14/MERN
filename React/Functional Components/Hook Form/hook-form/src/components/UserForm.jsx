import React, { useState } from 'react';
import FormDisplay from './FormDisplay';


const UserForm = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    const [nameError, setNameError] = useState("")
    const [lnameError, setLNameError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [conpasswordError, setConPasswordError] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname, lname, email, password, conpassword };
        console.log("Welcome", newUser);
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setConPassword("");
    };

    const validateFName = (e) => {
        setFname(e.target.value);

        if (e.target.value.length < 1) {
            setNameError("First Name is required!");
        } else if (e.target.value.length < 2) {
            setNameError("First name must be 2 characters or longer!");
        } else {
            setNameError("");
        }
    }

    const validateLName = (e) => {
        setLname(e.target.value);

        if (e.target.value.length < 1) {
            setLNameError("Last Name is required!");
        } else if (e.target.value.length < 2) {
            setLNameError("Last name must be 2 characters or longer!");
        } else {
            setLNameError("");
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);

        if (e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if (e.target.value.length < 6) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }

    const validateConPassword = (e) => {
        setConPassword(e.target.value);

        if (e.target.value !== password) {
            setConPasswordError("Passwords don't match!");
        } else if (e.target.value.length < 1) {
            setConPasswordError("Confirm Password is required!");
        } else if (e.target.value.length < 6) {
            setConPasswordError("Confirm Password must be 8 characters or longer!");
        } else {
            setConPasswordError("");
        }
    };



    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={validateFName} value={fname} />

                    {
                        nameError ?
                            <p style={{ color: 'red' }}>{nameError}</p> :
                            ""
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={validateLName} value={lname} />
                    {
                        nameError ?
                            <p style={{ color: 'red' }}>{lnameError}</p> :
                            ""
                    }
                </div>

                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={validateEmail} value={email} />
                    {
                        emailError ?
                            <p style={{ color: 'red' }}>{emailError}</p> :
                            ""
                    }
                </div>


                <div>
                    <label>Password: </label>
                    <input name='password' type="text" onChange={validatePassword} value={password} />
                    {
                        passwordError ?
                            <p style={{ color: 'red' }}>{passwordError}</p> :
                            ""
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={validateConPassword} value={conpassword} />
                    {
                        conpasswordError ?
                            <p style={{ color: 'red' }}>{conpasswordError}</p> :
                            ""
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>

            <div>
                <FormDisplay fname={fname} lname={lname} email={email} password={password} conpassword={conpassword} />

            </div>
        </div>

    );
};

export default UserForm;
