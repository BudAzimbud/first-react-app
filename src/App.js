import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Navbar , NavDropdown , Nav , Container} from 'react-bootstrap'

import TableUser from "./components/users/Table";
import UpdateUser from "./components/users/Update";
import FormUser from "./components/users/Form";
import LoginComponent from "./components/Login";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand className="logo" href="#home">Logo</Navbar.Brand>

            <Container>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />

              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Input</Nav.Link>
                  <Nav.Link href="/table">Table</Nav.Link>

                  <NavDropdown title="more" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>

                  <Nav.Link href="/register">
                    Register
                  </Nav.Link>

                  <Nav.Link eventKey={2} href="/login">
                    Login
                  </Nav.Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
                 <Route exact path='/' element={< FormUser />}></Route>
                 <Route exact path='/table' element={< TableUser />}></Route>
                 <Route exact path='/update/:id' element={< UpdateUser />}></Route>
                 <Route exact path='/login' element={< LoginComponent />}></Route>

          </Routes>
        </div>
      </Router>
    );
  }
}
