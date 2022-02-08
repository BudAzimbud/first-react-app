import { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Login.css";

import IconLogin from "../images/user.svg";
import BgLogin from "../images/background.svg";

export default class LoginComponent extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col lg={4} md={6} sm={12} className="text-center">
            <img className="icon-img" src={IconLogin} alt="icon" />
            <Form>
              <Form.Group className="mt-4 mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mt-4 mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary btn-block" type="submit">
                Submit
              </Button>

              <div className="mt-3 text-left">
                <a href="">
                  <small className="reset">Password Reset </small>
                </a>
                ||
                <a href="">
                  <small className="reset"> Quick Recover</small>
                </a>
              </div>
            </Form>
          </Col>

          <Col lg={8} md={6} sm={12}>
            <img src={BgLogin} alt="" className="w-100" />
          </Col>
        </Row>
      </Container>
    );
  }
}
