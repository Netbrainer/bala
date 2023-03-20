import React from 'react'
import { GoogleAuthProvider ,signInWithPopup,getAdditionalUserInfo, onAuthStateChanged} from 'firebase/auth'
import { Button, Input } from "@mui/material"
import { auth } from '../firebase.js'
import { useNavigate } from 'react-router-dom';
import {useEffect} from "react"
import {useAuthState} from 'react-firebase-hooks/auth'
let usDtl = false;
function SignIn() {
    const navigate = useNavigate()
    const [userstatus] =  useAuthState(auth)
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        
provider.setCustomParameters({ prompt: 'select_account' });
    
        signInWithPopup(auth,provider)
        .then((res) => {
            const userDetails = getAdditionalUserInfo(res)
            usDtl=userDetails.isNewUser 
            if(usDtl){
                <h1>Hello world</h1>
            }
        }

        )    
        
    }
    
    return (
    <div>

        <Button onClick={signInWithGoogle}>Sign In with google</Button>
    </div>
  )
}

export default SignIn
export {usDtl}