import React, { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const {emailPasswordSignIn,googleSignIn} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const location_uri = location.state?.from || '/';
    const handleGoogleLogin = () => {
        googleSignIn()
        .then((result)=>{
            history.push(location_uri);
        }).catch(err=>{
            console.log(err);
        })
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    //handleEmailPassword
    const handleEmailPaswordSignIn = (e) =>{
        e.preventDefault();
        console.log(email,password);
        if(password.length < 6){
            setError('Minimum Password Length is Six');
            return;
        }
        emailPasswordSignIn(email,password)
        .then((result) => {
            history.push(location_uri);
        }).catch(err => {
            setError(err.message);
        });
    }
    return (
        <div className='login-container'>
            <div>
                <h2>Please Login Here</h2>
                <form onSubmit={handleEmailPaswordSignIn} className="form-area">
                    <input type="email" onBlur={handleEmail} placeholder='Enter Email' required />
                    <br />
                    <br />
                    <input type="password" onBlur={handlePassword} placeholder="Enter Password" required />
                    <br />
                    <br />
                    <input type="submit" value="login" />
                    <Link to="/register" style={{marginLeft:'10px',textDecoration:'none'}}>Have No Any Account?</Link>
                </form>
                <span style={{margin:'10px 0',color:'red',display:'block'}}>{error}</span>
            </div>
            <div>
                <h2>---------or---------</h2>
                <button className='social-btn' onClick={handleGoogleLogin}>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;