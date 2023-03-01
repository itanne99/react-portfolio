import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const NavBar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}
