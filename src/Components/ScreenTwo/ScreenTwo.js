import React from 'react'
import {  Container, Row } from 'react-bootstrap'
import "./ScreenTwo.css"

const ScreenTwo = () => {
  return (
    <Container>
        <h3 style={{color:'navy'}}>Discover Top Software</h3>
        <div className="align-items-center" style={{paddingBottom:"20px",display:"flex",gap:"40px", flexWrap:"wrap", marginTop:'25px'}}>
        <p className="hover-orange" style={{color:"orange", borderBottom:"3px solid orange"}}>All Categories</p>
        <p className="hover-orange">Accounting</p>
        <p className="hover-orange">Education</p>
        <p className="hover-orange">ERM</p>
        <p className="hover-orange">HR</p>
        <p className="hover-orange">CRM</p>
        <p className="hover-orange">Billing</p>
        </div>
    </Container>
  )
}

export default ScreenTwo