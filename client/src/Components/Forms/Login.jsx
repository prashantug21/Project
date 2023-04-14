import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import {ImCross} from 'react-icons/im'
import {BsPersonCircle} from 'react-icons/bs'



function Login({loginShow, toggleLogin}) {
  const [email, setEmail]=useState('');

  async function sendOtp(e){
    e.preventDefault();
    const response = await fetch('http://localhost:3001/login',{
      method:'POST',
      headers:{ 'Content-Type':'application/json'},
      body:JSON.stringify({email})
      
  })
  const data= await response.json()}

  return (
    <Modal show={loginShow} onHide={toggleLogin} centered>
          <Form id='loginForm' className='p-3 bg-dark text-white' >
          <Button onClick={toggleLogin} id='loginCancelBtn' ><ImCross className='h3'/></Button>
          <BsPersonCircle className='d-block mt-5' id='person'/>
            <Form.Group className="mb-1 px-3 pt-5 pb-3 bg-dark text-white" controlId="loginEmail">
              <Form.Label className='fs-2'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className='py-2' value={email} onChange={setEmail}/>
            </Form.Group>
            <Button variant='primary' onClick={sendOtp}>Send Otp</Button>
            <Form.Group className="mb-3 px-3 bg-dark text-white" controlId="loginPassword">
              <Form.Label className='fs-2'>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" className='py-2'/>
            </Form.Group>
            <Button variant="primary" type="submit" id="loginSubmit" className='fs-3 mt-4'>
              Submit
            </Button>
          </Form>
      </Modal>
    
  );
}


export default Login;