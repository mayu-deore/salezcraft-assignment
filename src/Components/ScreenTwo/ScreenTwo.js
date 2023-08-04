import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./ScreenTwo.css"

const ScreenTwo = () => {
  return (
    <Container>
        <h1>Discover Top Software</h1>
        <Row className="align-items-center">
        <Col  xs="auto" className="hover-orange">All Categories</Col>
        <Col className="hover-orange">Accounting</Col>
        <Col className="hover-orange">Education</Col>
        <Col className="hover-orange">ERM</Col>
        <Col className="hover-orange">HR</Col>
        <Col className="hover-orange">CRM</Col>
        <Col className="hover-orange">Billing</Col>
        </Row>
    </Container>
  )
}

export default ScreenTwo