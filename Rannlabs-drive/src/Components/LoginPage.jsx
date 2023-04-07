import { Heading, Image, Text } from '@chakra-ui/react'
import React from 'react';
import logo from "../assets/logo.png"

const LoginPage = () => {
  return (
    <div style={{marginTop:"50px"}}>
        <Image src={logo} alt="logo" margin="auto" width="50%"/>
        <br/>
        <Heading color="#01addb">Welcome to the Rannlab-Drive</Heading>
        <Text fontSize="xl">File Manager for your Daily Needs</Text>
        <br/>

    </div>
  )
}

export default LoginPage