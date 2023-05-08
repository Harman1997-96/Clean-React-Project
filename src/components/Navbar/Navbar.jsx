import React, { useState, useEffect } from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../../img/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'

import { render } from 'react-dom'
import { Link } from 'react-router-dom'

const NavbarSet = () => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  }, [])
  return (
    <div
      className={
        scroll ? 'header-scroll  navbar_container' : 'navbar_container'
      }
    >
      {/* <div className="navbar_container"> */}
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="logo_set">
            <img src={Logo} width="7%" height="5%" />
            &nbsp;&nbsp; <span>Vibrant Infra Services Ltd.</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ position: 'absolute', right: '0%', top: '12px' }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3 me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
                <NavDropdown.Item href="/exterior">
                  <Nav.Link></Nav.Link>
                  Exterior
                </NavDropdown.Item>
                <NavDropdown.Item href="/interior">
                  <Nav.Link></Nav.Link>
                  Interior
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
              {/* <Nav.Link href="/#gallery">Gallery</Nav.Link> */}
              <Nav.Link href="/#about">Work with us</Nav.Link>
              <Nav.Link href="/#contact">Contact</Nav.Link>
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
    // </div>
  )
}

export default NavbarSet
