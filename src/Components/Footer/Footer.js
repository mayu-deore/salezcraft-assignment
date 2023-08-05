import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div style={{backgroundColor:"#80808045"}}>
        <Container style={{marginTop:"30px",paddingTop:"50px",paddingBottom:"80px"}}>
            <Row style={{textAlign:"start"}}>
                <Col sm={6}>
                    <h2 style={{color:"navy"}}>Subscribe to Newsletter</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div style={{display:"flex",alignItems:"center"}}>
                    <input style={{height:"40px"}} placeholder='Email Address'/>
                    <Button style={{height:"40px",borderRadius:"0px", backgroundColor:"navy",border:'none'}}>Subscribe</Button>
                    </div>
                </Col>
                <Col sm={2}>
                    <h3 style={{color:"navy", fontSize:"17px"}}>Company</h3>
                    <p style={{margin:"0px"}}>Article</p>
                    <p style={{margin:"0px"}}>Blog</p>
                    <p style={{margin:"0px"}}>Faq</p>
                    <p style={{margin:"0px"}}>Careers</p>
                    <p style={{margin:"0px"}}>Reference</p>
                    <p style={{margin:"0px"}}>Services</p>
                    <p style={{margin:"0px"}}>Privacy Policy</p>
                </Col>
                <Col sm={2}>
                <h3 style={{color:"navy", fontSize:"17px"}}>For Reference</h3>
                    <p style={{margin:"0px"}}>Live Podcast</p>
                    <p style={{margin:"0px"}}>For Services</p>
                    <p style={{margin:"0px"}}>For Purpose</p>
                    <p style={{margin:"0px"}}>Subscribe</p>
                    <p style={{margin:"0px"}}>For Resources</p>
                </Col>
                <Col sm={2}>
                <h3 style={{color:"navy", fontSize:"17px"}}>Need Help ?</h3>
                <p style={{margin:"0px"}}>Contact Us</p>
                <p style={{margin:"0px"}}>Request a Callback</p>
                <p style={{margin:"0px"}}>Write Us</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer