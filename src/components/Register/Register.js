import React, { useState } from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../Login/Login.css';

const Register = () => {
    const {emailPasswordRegister} = useAuth();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const location = useLocation();

    const history = useHistory();

    const location_uri = location.state?.from || '/';

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    //handleEmailPassword
    const handleRegister = (e) =>{
        e.preventDefault();
        console.log(email,password);
        if(password.length < 6){
            setError('Minimum Password Length is Six');
            return;
        }
        emailPasswordRegister(email,password)
        .then((result) => {
            history.push(location_uri);
        }).catch(err => {
            setError(err.message);
        });
    }
    return (
        <div className='login-container'>
            <div>
                <h2>Please Register Here</h2>
                <form onSubmit={handleRegister} className="form-area">
                    <input type="email" onBlur={handleEmail} placeholder='Enter Email' required />
                    <br />
                    <br />
                    <input type="password" onBlur={handlePassword} placeholder="Enter Password" required />
                    <br />
                    <br />
                    <input type="submit" value="Register" />
                    
                    <Link to="/login" style={{marginLeft:'10px',textDecoration:'none'}}>Already Registerd?</Link>
                </form>
                <span style={{margin:'10px 0',color:'red',display:'block'}}>{error}</span>
            </div>
            <div>
                <h2>---------or---------</h2>
                <button className='social-btn'>SignUp With Google</button>
            </div>
        </div>
    );
};

export default Register;