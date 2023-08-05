import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.css";
import './Navbar.css'
import {Button } from "react-bootstrap";
const WebNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <div className='navbar-middle-content' style={{justifyContent:"space-between"}}>
        <Navbar.Brand href="#home" >
            <img style={{height:"50px", width:"150px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKY9pswIQKykxlbWq_j1tUCKkewQ8Vv4wRg&usqp=CAU"/>
            </Navbar.Brand>
            </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:"center"}}>
          <div className='navbar-middle-content' >
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Action</Nav.Link>
          </Nav>
          </div>
          <div className='navbar-middle-content' style={{position:"absolute", right:"70px"}}>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            <Button style={{color:"white",backgroundColor:"navy",border:"1px solid green"}}>Request Callback</Button>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default WebNavbar;

