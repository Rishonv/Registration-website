import React, {useState} from "react"; 
//try{
    export const Login = (props) => {
        const [email, setEmail] =  useState('');
        const [password, setPass] = useState('');
        const handleSubmit = (e) => {
            e.preventDefaul();
            console.log(email);
        }
        return (
            <div className="auth-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    {/* <label htmlFor ="Email">email</label> */}
                    <input value ={email} onChange={(e) => setEmail(e.target.value)} 
                        type = "email" placeholder="Email" id="email" name="email"/>
                    {/* <label htmlFor ="password">Password</label> */}
                    <input value={password} onChange={(e) => setPass(e.target.value)} 
                        type ="password" placeholder="Password" id="password" name="password"/>
                    <button type="submit">Log In</button>
                </form>
                <button onClick={() => props.onFormSwitch('register')} type = "button">Don't have an account? Sign up!</button>
            </div>
        )
    }
// }catch (error){
//     console.error(error);
// }