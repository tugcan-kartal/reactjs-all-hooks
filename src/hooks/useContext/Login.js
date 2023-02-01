import React,{useContext} from 'react';
import { AppContext } from './ContextTutorial';

function Login() {

    const {setUsername}=useContext(AppContext);

  return (
    <div>Login</div>
  )
}

export default Login