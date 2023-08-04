import React from "react";
import BannerImg from "../../Assets/Group14477@2x.png";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${BannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "550px",
  };
  return (
    <div style={bannerStyle}>
    <div style={{display:"flex",alignItems:"center",height:"100%"}}>
      <Container style={{textAlign:"start"}}>
        <h1 className="header-of-banner">
          Find the perfect job <br /> for you
        </h1>
        <p className="subtitle-of-banner">
          Search your career opportunity through 12,800 jobs{" "}
        </p>
    
        <Row>
          <h3 className="pop-ular-search-h-tag">Popular Searches</h3>
        </Row>
        <Row className="pop-searches-flex">
          <div className="pop-ular-searches-div">
            <p>Designer</p>
          </div>

          <div className="pop-ular-searches-div">
            <p>Writer</p>
          </div>

          <div className="pop-ular-searches-div">
            <p>Team Leader</p>
          </div>

          <div className="pop-ular-searches-div">
            <p>Senior</p>
          </div>

          <div className="pop-ular-searches-div">
            <p>Web Designer</p>
          </div>
        </Row>
      </Container>
    </div>
    </div>
  );
};

export default Banner;