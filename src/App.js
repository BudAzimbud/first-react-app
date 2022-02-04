import "./App.css";
import React from "react";
import FormUser from "./Form";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Navbar , NavDropdown , Nav , Container} from 'react-bootstrap'
import TableUser from "./Table";
import UpdateUser from "./Update";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Header</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Input</Nav.Link>
                  <Nav.Link href="/table">Table</Nav.Link>
                  <NavDropdown title="menu drop" id="collasible-nav-dropdown">
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
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
                 <Route exact path='/' element={< FormUser />}></Route>
                 <Route exact path='/table' element={< TableUser />}></Route>
                 <Route exact path='/update/:id' element={< UpdateUser />}></Route>

          </Routes>
        </div>
      </Router>
    );
  }
}
