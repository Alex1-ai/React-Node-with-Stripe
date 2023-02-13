import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"
import StripeCheckout from "react-stripe-checkout"
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios"


const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   //border: 2px solid orange;
   height: 100vh;

`
const Button = styled.button`

    background-color: black;
    color: white;
    border-radius: 10px;
    padding: 13px;
    width: 200px;
    font-size: 20px;
    font-weight: bold;
    cursor:pointer;

 
` 

const KEY = "pk_test_51LflGiBfZd4ZWVbT1jpoA7TiZlLicPQlA64T7LeU4J8JS71knuHRmPLLTMTPqMmc1ylPT9HpneSCsXxmxhosTLWN001xrQ0Drp"
const Pay = () => {
const [stripeToken, setStripeToken] = useState(null)
 const history = useNavigate()
const onToken = (token)=>{
    console.log(token)
    setStripeToken(token)
 }

 useEffect(()=>{
    const makeRequest = async ()=>{
        try{
            const res =await axios.post("http://127.0.0.1:5000/api/checkout/payment",
            {
                tokenId: stripeToken.id,
                amount: 2000,
            })
            console.log(res.data)
            //history.push('success')
        }catch(err){
            
            console.log("error 1 " + err)
        }
    }
    stripeToken && makeRequest()

 }, [stripeToken, history])
  return (
    <Container>
    { stripeToken ? (<span>Processing. Please wait ....</span>):(
    <StripeCheckout
      name="Alexis Shop"
      image="https://avatars.githubusercontent.com/u/1486366?v=4"
      billingAddress
      shippingAddress
      description = " Your total is $20"
      amount={2000}
       token={onToken}

      stripeKey={KEY}
    
    >
        {/* <Link to="success"> <Button>Pay Now</Button></Link> */}
        <Button>Pay Now</Button>
    </StripeCheckout>
    
     )}; 
    </Container>
  )
}

export default Pay