import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Articles = () => {
  return (
    <Container>
        <h2 style={{textAlign:"start"}}>Latest Articles</h2>

        <Row>
            <Col sm={3}>
            <Card >
      <Card.Img variant="top" 
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRun-k0PpI5puVQvcOs1hERhgDMiScIAqjjYkMEzB7qb1HaATDzdFxLuWfMUyS-E8ADpOQ&usqp=CAU'/>
      <Card.Body>
        <Card.Text style={{textAlign:"start"}}>
            <p style={{color:"gray"}}>Tuesday 03 August 2023</p>
            <h3 style={{color:"blue", margin:"0px", fontSize:"16px"}}>

          Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </h3>
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>

            <Col sm={3}>
            <Card >
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Text style={{textAlign:"start"}}>
            <p style={{color:"gray"}}>Tuesday 03 August 2023</p>
            <h3 style={{color:"blue", margin:"0px", fontSize:"16px"}}>

          Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </h3>
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>

            <Col sm={3}>
            <Card >
            <Card.Img variant="top" src='data:image/jpeg;base64,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'/>
             <Card.Body>
        <Card.Text style={{textAlign:"start"}}>
            <p style={{color:"gray"}}>Tuesday 03 August 2023</p>
            <h3 style={{color:"blue", margin:"0px", fontSize:"16px"}}>

          Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </h3>
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>

            <Col sm={3}>
            <Card >
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" />
      <Card.Body>
        <Card.Text style={{textAlign:"start"}}>
            <p style={{color:"gray"}}>Tuesday 03 August 2023</p>
            <h3 style={{color:"blue", margin:"0px", fontSize:"16px"}}>

          Some quick example text to build on the card title and make up the
          bulk of the card's content.
            </h3>
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>

            
        </Row>
    </Container>
  )
}

export default Articles