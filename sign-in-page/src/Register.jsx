import React, {useState} from "react"; 

export const Register = (props) => {
    const [email, setEmail] =  useState('');
    const [password, SetPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefaul();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">Full Name</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type = "name" name="firstName" id="firstName" placeholder="First Name"></input>
                <label htmlFor="lastName">Last Name</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type = "name" name="lastName" id="lastName" placeholder="Last Name"></input>

                
                <label htmlFor ="email">Email</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder="Email" id="email" name="email"/>
                <label htmlFor = "password">Password</label>
                <input value = {password} onChange={(e) => SetPass(e.target.value)} type = "password" placeholder="Password" id="password" name="password"/>
                <button type = "submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')} type = "button">Already have an account? Login!</button>
        </div>
    )
}