import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const ScreenFour = () => {
  return (
    <div style={{backgroundColor:"#80808045", marginTop:"30px"}}>
    <Container style={{paddingTop:"30px"}}>
        <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Col sm={6} style={{textAlign:"start"}}>
                <p>Using a Software?</p>
                <h2>We'd love ypur <br/> feedback!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                
                <Button>Write a Review</Button>
            </Col>
            <Col sm={6}>
                <img style={{height:"400px", width:"100%"}} src='https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'/>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default ScreenFour