import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import "./FooterBar.css";
const FooterBar = () => {
  return (
    <Container className="Footer">
      <br />
      <br />
      <Row>
        <Col>
          <p>Contact Us </p>
        </Col>

        <Col className="social-links">
          <a
            href="http://github.com/spunkyraven"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="http://www.facebook.com/Spunky22.01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="http://www.linkedin.com/in/iheb-kanzari-67890b120/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Typography variant="body4" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="#">
              Shadyy. All rights reserved.
            </Link>{" "}
          </Typography>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterBar;
