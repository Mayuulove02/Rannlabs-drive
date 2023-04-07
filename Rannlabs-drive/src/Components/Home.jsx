import React from 'react';
import { useState } from 'react';
import {auth,provider} from "../Context/firebase";
import {signInWithPopup} from "firebase/auth";
import { Button, Text } from '@chakra-ui/react';
import Drive from './Drive';
import LoginPage from './LoginPage';

 
const Home = () => {
    const [user,setUser] = useState(null) ;
    
    const handleGoogleSignin=()=>{
      signInWithPopup(auth,provider).then((result)=>{
        const user =result.user
        console.log(user)
        setUser(user)
      }).catch((err)=>{
       console.log(err) 
      })
    }

  return (
    <div>
      <div>
      {user?(
        <>
        <Drive/>
        </>
      ):(
        // <LoginPage/>
        <div >
          <LoginPage/>
          <Button onClick={handleGoogleSignin} color={"#01addb"}>Login </Button>
        </div>
        
      )}
   
      </div>
    </div>
   
     
    
  )
}

export default Home