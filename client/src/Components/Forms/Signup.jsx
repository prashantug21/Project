import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import {ImCross} from 'react-icons/im'
import {BsPersonCircle} from 'react-icons/bs'




export default function SignUp({signUpShow, toggleSignUp}) {

    const [username, setUsername]=useState('');
    const [otp,setOTP]=useState('');
    const [email, setEmail]=useState('');
    const [showSignUpSubmit, setshowSignUpSubmit]=useState(false);
    
    const emailReg= new RegExp(/^[\w-\.]+@nitp\.ac\.in$/);

    async function SendOTP(e){
        e.preventDefault();
        setshowSignUpSubmit(true);
        const response =await fetch('http://localhost:3001/sendOTP',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            email,
          })
        })
        const data= await response.json()
        console.log(data)
      }

      async function signUp(e){
        e.preventDefault();
        const response =await fetch('http://localhost:3001/SignUp',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
            username,
            email,
            otp
          })
        })
        const data= await response.json()
        console.log(data)
      }


  return (
    <div>
        <Modal show={signUpShow} onHide={toggleSignUp} centered>
          <div id='signUpForm' className='p-5 bg-dark text-white'
          >
          <Button onClick={toggleSignUp} id='signUpCancelBtn' ><ImCross className='h3'/></Button>
          <BsPersonCircle className='d-block my-5' id='person'/>
          <Form onSubmit={SendOTP}>
            <Form.Group className="mb-1 pb-3 bg-dark text-white" controlId="signUpEmail">
              <Form.Label className='fs-3 my-0'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className='py-2' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="off" pattern={emailReg} required/>
            </Form.Group>

            <Form.Group className="mb-1 pb-3 bg-dark text-white" controlId="signUpText">
              <Form.Label className='fs-3 my-0'>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" autoComplete="off" className='py-2' value={username} onChange={(e)=>setUsername(e.target.value)} required/>
            </Form.Group>
            <Button variant="primary" type='submit' id="signUpSendOTP" className='fs-3 my-2'>
              Send OTP
            </Button>
            </Form>
            {showSignUpSubmit &&(
            <Form onSubmit={signUp}>
            <Form.Group className="mb-3 bg-dark text-white" controlId="signUpOTP">
              <Form.Label className='fs-3 my-0'>Password</Form.Label>
              <Form.Control type="number" placeholder="OTP" a autoComplete="off" className='py-2' value={otp} onChange={(e)=>setOTP(e.target.value)} pattern='/^\S/' required min='1000' max='9999'/>
            </Form.Group>
            <Button variant="primary" type="submit" id="signUpSubmit" className='fs-3 mt-4'>
              Sign Up
            </Button>
            </Form>
            )}
          </div>
      </Modal>
      
    </div>
  )
}
