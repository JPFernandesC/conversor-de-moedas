'use client'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
export default function Pagina({ titulo, children }) {


  
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark" style="background-color: #e3f2fd;">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Mais" id="basic-nav-dropdown">
              <NavDropdown.Item  href="/conversor/clc">Conversor</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      <div className="bg-success text-center text-white py-2">
        <h1>{titulo}</h1>
      </div>
      <Container className="mt-2">
        {children}
      </Container>
    </>
  )
}
