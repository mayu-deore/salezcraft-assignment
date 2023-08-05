import React from 'react'
import { Card, Carousel, Button, Container } from 'react-bootstrap'
import cardOneImage from '../../Assets/cardoneimage.png'
import { AiFillStar } from 'react-icons/ai';
import "./CarouselScreen.css"

const CarouselScreen = () => {
  return (
    <Container>
         <Carousel data-bs-theme="dark"  indicators={false}>
   

      <Carousel.Item>
        <div className="d-flex justify-content-center" style={{gap:"45px"}}>
          <Card style={{ position: 'relative', backgroundColor:"white", border:"1px solid black", padding:"5px"}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'navy', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UYLH2Wz2sKAGjiwgd-EAYII4LenBB6-Llg&usqp=CAU'/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>SAMSUNG</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
                <Button style={{color:"green",backgroundColor:"white",border:"1px solid green"}}>Request Callback</Button>
            </Card.Body>
          </Card>

          <Card style={{ position: 'relative', backgroundColor:"white", border:"1px solid black", padding:"5px"}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'green', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAoCwNsgsKKdYNW48BWam47wK95km5V9h0BSihC5YcVFJ83JuJtKK-bSoP1vZojm3YpI&usqp=CAU'/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>HP</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
                <Button style={{color:"green",backgroundColor:"white",border:"1px solid green"}}>Request Callback</Button>
            </Card.Body>
          </Card>
          <Card style={{ position: 'relative', backgroundColor:"white", border:"1px solid black", padding:"5px"}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'navy', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKY9pswIQKykxlbWq_j1tUCKkewQ8Vv4wRg&usqp=CAU"/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>ARTICULATE</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
                <Button style={{color:"green",backgroundColor:"white",border:"1px solid green"}}>Request Callback</Button>
            </Card.Body>
          </Card>
          <Card style={{ position: 'relative', backgroundColor:"white", border:"1px solid black", padding:"5px"}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'green', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src='data:image/png;base64,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'/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>DELL</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
                <Button style={{color:"green",backgroundColor:"white",border:"1px solid green"}}>Request Callback</Button>
            </Card.Body>
          </Card>

         
        </div>
      </Carousel.Item>

       <Carousel.Item>
        <div className="d-flex justify-content-center" style={{gap:"45px"}}>
          <Card style={{ position: 'relative', backgroundColor:"white", border:"1px solid black", padding:"5px"}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'navy', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UYLH2Wz2sKAGjiwgd-EAYII4LenBB6-Llg&usqp=CAU'/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>SAMSUNG</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
                <Button style={{color:"green",backgroundColor:"white",border:"1px solid green"}}>Request Callback</Button>
            </Card.Body>
          </Card>

          <Card style={{ position: 'relative', backgroundColor:"white", border:"1px solid black", padding:"5px"}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'green', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAoCwNsgsKKdYNW48BWam47wK95km5V9h0BSihC5YcVFJ83JuJtKK-bSoP1vZojm3YpI&usqp=CAU'/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>HP</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
                <Button style={{color:"green",backgroundColor:"white",border:"1px solid green"}}>Request Callback</Button>
            </Card.Body>
          </Card>
          <Card style={{ position: 'relative', backgroundColor:"white", border:"1px solid black", padding:"5px"}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'navy', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKY9pswIQKykxlbWq_j1tUCKkewQ8Vv4wRg&usqp=CAU"/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>ARTICULATE</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
                <Button style={{color:"green",backgroundColor:"white",border:"1px solid green"}}>Request Callback</Button>
            </Card.Body>
          </Card>
          <Card style={{ position: 'relative', backgroundColor:"white", border:"1px solid black", padding:"5px"}}>
          <div style={{ backgroundColor:"white",padding:"10px" }}>
          {/* Add your button here */}
          <Button
            variant="primary"
            style={{
                alignItems:'center',
                textAlign:'center',
              width: '120px', // Set the desired width here
              height: '30px', // Set the desired height here
              backgroundColor: 'green', // Set the background color here
              display: 'flex', // Use flexbox to center content
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
            }}
          >
            Click Me
          </Button>
        </div>
            <Card.Img  style={{height:"100px", width:"100%"}} src='data:image/png;base64,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'/>
            <Card.Body style={{backgroundColor:"white", color:"black"}}>
              <Card.Title style={{textAlign:"start"}}>DELL</Card.Title>
              <Card.Text style={{justifyContent:"space-between", display:"flex"}}>
                <div>
                Spine HR Suite
                </div>
                <div>
                 <AiFillStar style={{fill:"orange",}}/> <span>4.5</span>
                </div>
                </Card.Text>
                <Button style={{color:"green",backgroundColor:"white",border:"1px solid green"}}>Request Callback</Button>
            </Card.Body>
          </Card>

         
        </div>
      </Carousel.Item>
     
     
     
    </Carousel>
    
    </Container>
  )
}

export default CarouselScreen