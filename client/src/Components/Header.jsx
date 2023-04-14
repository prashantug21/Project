import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import Button from 'react-bootstrap/Button'
import Login from './Forms/Login'

import React, { useState } from 'react'
import SignUp from './Forms/Signup'




function Header() {

  const [loginShow, setLoginShow] = useState(false)
  const toggleLogin = () => setLoginShow(!loginShow);
  
  const [signUpShow, setSignUpShow] = useState(false)
  const toggleSignUp = () => setSignUpShow(!signUpShow);
  
  return (
    <div>
      <Navbar bg="dark" expand="sm" variant="dark" sticky="top" display="block">
        <Container fluid>
          <Navbar.Brand href="#home">Buy-Sell site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between p-0'>
            <Nav id="navbar">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Buy">Buy</Nav.Link>
              <Nav.Link href="#Sell">Sell</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <hr id='hr1' />
            <Nav id="enter">
              <Button id="loginButton" variant="outline-primary" onClick={toggleLogin} >Login</Button>
              <Button id="signupButton" variant="primary" onClick={toggleSignUp} >Sign Up</Button>{' '}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login loginShow={loginShow} toggleLogin={toggleLogin}/>
      <SignUp signUpShow={signUpShow} toggleSignUp={toggleSignUp}/>
    </div>
  );
}

export default Header;