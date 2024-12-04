import { useState } from 'react';
import './login.css';
import logo from '../../assets/logo.png';
import {login,signup} from '../../firebase'
import FooterLogin from '../../components/Footer/footerLogin';
export default function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')

  const user_auth = async (event)=>{
    event.preventDefault()
    if(signState==='Sign In'){
      await login(email, password)
    }else {
      await signup(name,email,password)
    }
  }


  return (
    <div className={`login ${signState === 'Sign Up' ? 'white-background' : ''}`}>
      <img src={logo} className='loginLogo' alt="" />
      <div className={`loginForm ${signState ==='Sign Up' ? 'white-background' : ''}`} >
        <h1>{signState}</h1>
        <form action="">
        {signState === 'Sign Up' ? <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='User  Name' /> : null}
        <input value={email} type="email" placeholder='Email or mobile number' onChange={(e)=>{setemail(e.target.value)}}/>
        <input value={password} type="password" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button className='signIn-btn' onClick={user_auth} type='submit'>{signState}</button>
          <div className="formhelp">
            <div className="remember">
              <input type="checkbox"/>
              <span><p>Remember me</p></span>
            </div>
          </div>
          <div className="form-switch">
            {signState === 'Sign In' 
              ? <p className='p1'>New to Netflix? <p onClick={()=>{setSignState('Sign Up')}} className={`p2`}> Sign Up now</p></p> 
              : <p className='p1'>Already have an Account? <p onClick={()=>{setSignState('Sign In')}} className= {`p2 ${signState === 'Sign Up' ? 'darkP' : ''}`}> Sign In now</p></p>
            }
            <p className='p3'>
              This page is protected by Google reCAPTCHA to ensure youre not a bot. <a href="#">Learn more.</a> 
            </p>
          </div>
        </form>
      </div>
      <FooterLogin/>
    </div>
  );
}

