import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";

const AboutuS = () => {
  return (
    <div>
      <Container
        style={{ width: "85%", marginLeft: "10%", marginTop: "120px" }}
      >
        <Row>
          <Col sm={6}>
            <Figure.Caption>
              <br />
              <br />
              <h1>Who we are</h1>
              <br />
              <br />
              Mobility is a basic human right of everyone. It opens endless
              opportunities and equal possibilities, no matter where you were
              born or where you live. We are committed to empowering cities,
              businesses, and people everywhere to enjoy a better quality of
              life by removing the limitations and barriers of urban mobility.
              Powered by the largest mobility community in the world, we are
              helping to create cleaner, safer and better cities to live in
              where mobility will become an enabler for people and businesses to
              discover endless opportunities.
              <br /> JoyRide is Tunisian trustworthy website, That offers you
              secured rides throughout Tunisia .
            </Figure.Caption>
          </Col>
          <Col sm={6}>
            <Figure>
              <Figure.Image
                width={400}
                height={500}
                alt="city"
                src="/images/About.PNG"
              />
            </Figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutuS;
