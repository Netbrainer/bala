import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import SignIn from './SignIn'
import { auth } from '../firebase'


function Welcome() {
    const [user]  = useAuthState(auth)
    const rdr = useNavigate();
    
  return (
    <div>
        This is the welcome page
        {user ? rdr("/home"):rdr("/authenticate")}
        
    </div>
  )
}

export default Welcome