import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  {
    /* footer section starts */
  }
  return (
    <footer className="bg_red">
      <Container>
        <Row>
          <Col xl={6}>
            <ul className="footer_list">
              <li>
                <span>KAUTILYA SCHOOL OF PUBLIC POLICY</span>
              </li>
              <li>
                GITAM (Deemed to be University)
                <br />
                Rudraram, Patancheru Mandal
                <br />
                Hyderabad, Telangana 502329
              </li>
              {/* <li>
       Phone: +91 9100850851
        </li>
        <li>
        <span>For application inquires</span><br /> admissions@kautilya.org.in
        </li>
        <li>
      <span> For careers</span><br /> careers@kautilya.org.in
        </li> */}
            </ul>
          </Col>
          <Col xl={6}>
            <ul className="footer_list right_footer text-end">
              <li>
                <a href="https://www.gitam.edu/" target="_blank">
                  ABOUT GITAM{" "}
                </a>
              </li>
              <li>
                <a href="/about">BOARD OF ADVISORS </a>
              </li>
              <li>
                <a href="/resources">BEYOND ACADEMICS </a>
              </li>
              <li>
                <a href="/privacy-policy">PRIVACY POLICY </a>
              </li>
              <li>
                <a href="/kspps-commitment-to-building-a-harassment-free-environment">
                  ICC POLICY{" "}
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );

  {
    /* social links */
  }
}
export default Footer;
