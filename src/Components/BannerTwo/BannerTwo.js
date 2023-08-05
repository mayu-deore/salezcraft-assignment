import React from "react";
import BannerImg from "../../Assets/Group14477@2x.png";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

const BannerTwo = () => {
  const bannerStyle = {
    backgroundImage: `url("https://plus.unsplash.com/premium_photo-1661414836308-0c6773b3f33a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "550px",
    marginTop:"50px",
    // color:"white"
  };
  return (
    <div style={bannerStyle} >
    <div style={{display:"flex",alignItems:"center",height:"100%"}}>
      <Container style={{textAlign:"start"}}>
      <h1 className="header-of-banner" style={{color:'orange'}}>
         Staff Pick
        </h1>
        <h3 className="header-of-banner" >
          Find the perfect job <br /> for you
        </h3>
        <p className="subtitle-of-banner" style={{color:'navy', fontWeight:'700'}}>
          {/* Search your career opportunity through 12,800 <br/> jobs Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. {" "} */}
        </p>
    
        <Button style={{color:"white",backgroundColor:"orange",border:"1px solid green"}}>Request a Free Demo</Button>
      </Container>
    </div>
    </div>
  );
};

export default BannerTwo;