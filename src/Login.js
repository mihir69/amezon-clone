import React,{useState} from 'react'
import login_css from './Login.module.css'
import logo from './img/amezon-login-logo.png'
import { auth } from './firebase';
import {useHistory} from 'react-router-dom'
function Login() {
    const history  = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const signIn = (e) =>{
         e.preventDefault();
         auth.signInWithEmailAndPassword(email,password)
         .then((auth)=>{
             if(auth)
             history.push('/')
         })
         .catch(error=> alert(error.message))
    }
    const register = (e) =>{
          e.preventDefault();
          auth.createUserWithEmailAndPassword(email,password)
          .then((auth)=> {
              if(auth)
            history.push('/');  
            console.log(auth)})
          .catch((error)=>alert(error.message));
    }
    return (
        <div className={login_css.Login}>
            <img className={login_css.Login__logo}
                src={logo} alt='amezon-logo'
            />
            <div className={login_css.Login__container}>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className={login_css.Login__signInButton}>Login</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button type='submit' onClick={register} className={login_css.Login__registerButton}>Create your amezon account</button>
            </div>
        </div>
    )
}

export default Login
