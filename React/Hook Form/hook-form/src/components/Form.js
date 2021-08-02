import React, { useState } from  'react';

const Form = props => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [ firstnameError, setFirstnameError ] = useState("");
    const [ lastnameError, setLastnameError ] = useState("");
    const [ emailError, setEmailError ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    const [ confirmpasswordError, setConfirmpasswordError ] = useState("");

const handelSubmit = e => {
    e.preventDefault();
    const user = {firstname,lastname,email,password,confirmpassword};
    console.log(user);
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfirmpassword("");
    
}

const handelOnChangeFirstName = e => {
    setFirstname(e.target.value)
    if (e.target.value.length <2 && e.target.value.length !== 0){
        setFirstnameError("first name must be at least 2 characters");
    }else{
        setFirstnameError("");
    }
}

const handelOnChangeLastName = e => {
    setLastname(e.target.value)
    if (e.target.value.length <2 && e.target.value.length !== 0){
        setLastnameError("last name must be at least 2 characters");
    }else{
        setLastnameError("");
    }
}

const handelOnChangeEmail = e => {
    setEmail(e.target.value)
    if( e.target.value.length !== 0){
    var pattern = new RegExp (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
    if (!(pattern.test(e.target.value))){
        setEmailError("Enter valid Email!");
    }}else{
        setEmailError("");
    }
}
const handelOnChangePassword = e => {
    setPassword(e.target.value)
    if(e.target.value.length < 8 && e.target.value.length !== 0){
        setPasswordError("password must be at least 8 characters")
    }else{
        setPasswordError("");
    }
}

const handelOnChangeConfirmpassword = e => {
    setConfirmpassword(e.target.value)
    if(password!== e.target.value && e.target.value.length !== 0){
        setConfirmpasswordError("password should match!")
    }else{
        setConfirmpasswordError("");
    }
}

return(
    <form onSubmit = {handelSubmit}>
        <label> First Name</label>
        <input 
        type="text"
        value={firstname}
        onChange={handelOnChangeFirstName}
        />
        {firstnameError ? <p style={{color:"red"}}> {firstnameError}</p> : null}
        <label> Last Name</label>
        <input 
        type="text"
        value={lastname}
        onChange={handelOnChangeLastName}
        />
        {lastnameError ? <p style = {{color:"red"}}> {lastnameError}</p>: null}
        <label> Email </label>
        <input 
        type="text"
        value={email}
        onChange={handelOnChangeEmail}
        />
        {emailError ? <p style = {{color:"red"}}> {emailError}</p>: null}
        <label> Password </label>
        <input 
        type="password"
        value={password}
        onChange={handelOnChangePassword}
        />
        {passwordError ? <p style = {{color:"red"}}> {passwordError}</p>: null}
        <label> Confirm Password </label>
        <input 
        type="password"
        value={confirmpassword}
        onChange={handelOnChangeConfirmpassword}
        />
        {confirmpasswordError ? <p style = {{color:"red"}}> {confirmpasswordError}</p>: null}
        <input type="submit" value="Submit"/>
        <p>First Name: {firstname} </p>
        <p> Last Name: {lastname}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confrim Password: {confirmpassword}</p>
    </form>
)
}

export default Form