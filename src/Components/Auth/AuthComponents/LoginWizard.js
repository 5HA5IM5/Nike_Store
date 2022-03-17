import React from 'react';
import '../AuthComponentsStyling/LoginWizard.css'
import nike_yellow from '../../../Assets/nike_yellow.png';
import nike from "../../../Assets/nike.png";
import doit from "../../../Assets/doit.png";
import { useState } from 'react';
import LoginForm from '../AuthComponents/LoginForm';
import SignupForm from '../AuthComponents/SignupForm';
import LoginOuterLink from '../AuthComponents/LoginOuterLink';
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal';

const LoginWizard = () => {

  const [login, setlogin] = useState(true);
  const [signup, setsignup] = useState(false);

  return <div className='login'>

    <Fade >
      <div className='login_right'>
        <img src={nike} className="nike_sc" alt="nike logo" />
        <img src={doit} className="overlap" alt="nike Written" />
      </div>
    </Fade>

    <div className='login_left'>

      <Link to={'/'}>
        <img src={nike_yellow} className="nike_logo" alt="nike logo" />
      </Link>

      <div className='wizard'>
        <button className={`login_switch ${login && 'active'}`} onClick={() => (setlogin(true) & setsignup(false))}>LOGIN</button>
        <button className={`signup_switch ${signup && 'active'}`} onClick={() => (setsignup(true) & setlogin(false))} >SIGN UP</button>
      </div>

      <span className={`${login ? ' show' : 'hide'}`}>
        <LoginForm />
      </span>
      <span className={`${signup ? ' show' : 'hide'}`}>
        <SignupForm />
      </span>


      <LoginOuterLink />

    </div>
  </div>;
};

export default LoginWizard;
