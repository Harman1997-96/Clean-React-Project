import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Exterior from '../Pages/Exterior'
import Interior from '../Pages/Interior'
import Logo from '../../img/logo.png'

const navbar = () => {
  return (
    <div className="navbar_container">
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} width="7%" height="5%" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#features">Home</Nav.Link>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Exterior />
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Interior />
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default navbar
