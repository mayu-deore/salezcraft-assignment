import React from 'react'
import { Card, Carousel, Button, Container } from 'react-bootstrap'
import cardOneImage from '../../Assets/cardoneimage.png'
import { AiFillStar } from 'react-icons/ai';

const CarouselScreen = () => {
  return (
    <Container>
         <Carousel data-bs-theme="dark" interval={null} indicators={true}>
      <Carousel.Item>
        <div className="d-flex justify-content-center" style={{gap:"45px"}}>
          <Card style={{ position: 'relative'}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'orange', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src="data:image/png;base64,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"/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>HR Interface</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ position: 'relative'}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'orange', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src="data:image/png;base64,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"/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>HR Interface</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ position: 'relative'}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'orange', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src="data:image/png;base64,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"/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>HR Interface</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ position: 'relative'}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'orange', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src="data:image/png;base64,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"/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>HR Interface</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Carousel.Item>
     
      <Carousel.Item>
        <div className="d-flex justify-content-center" style={{gap:"45px"}}>
          <Card style={{ position: 'relative'}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'orange', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src="data:image/png;base64,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"/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>HR Interface</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ position: 'relative'}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'orange', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src="data:image/png;base64,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"/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>HR Interface</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ position: 'relative'}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'orange', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src="data:image/png;base64,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"/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>HR Interface</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ position: 'relative'}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'orange', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src="data:image/png;base64,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"/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>HR Interface</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
            </Card.Body>
          </Card>
          
          {/* Add more cards here */}
        </div>
      </Carousel.Item>
    </Carousel>
    
    </Container>
  )
}

export default CarouselScreen