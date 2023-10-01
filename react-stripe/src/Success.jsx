import React from 'react'
import LogoImage from "./images/logo.png"

import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
  

`
const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border: 10px solid teal;
   height: 400px;
   width: 400px;
   //padding: 70px



`
const Button = styled.button`
    display: block;
    background-color: teal;
    color: white;
    border-radius: 10px;
    padding: 13px;
    width: 200px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    border: none;

 
` 

const Logo = styled.img`
    margin-bottom: 20px;
    width: 130px;
    height: 130px;
    // margin: 15px;
  

`
const Text = styled.p`
   
   width: 270px;


`

const Success = () => {
  return (
    <Container>
    <Wrapper>
    
    <Logo src={LogoImage}></Logo>
    <Button>Successful.</Button>
   
    <Text>Your order is being prepared. Thanks for choosing Alexis Shop.</Text>
    

</Wrapper>

</Container>
  )
}

export default Success