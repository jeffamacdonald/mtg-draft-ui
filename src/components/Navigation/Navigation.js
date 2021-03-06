import React from 'react';
import SessionService from "../../services/session.service";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { withRouter } from "react-router-dom";
function Navigation(props) {
  function renderLogout() {
    if(props.location.pathname !== '/register' && props.location.pathname !== '/login'){
      return(
        <Nav className="justify-content-end">
          <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
        </Nav>
      )
    }
  }
  function handleLogout() {
	  SessionService.logout();
    localStorage.removeItem('authorization')
    props.history.push('/login')
  }
  function renderNav() {
    if(props.location.pathname !== '/register' && props.location.pathname !== '/login'){
      return(
        <Nav className="mr-auto justify-content-center">
          <NavDropdown title="Drafts" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/mydrafts">My Drafts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/createdraft">Create Draft</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/joindraft">Join Draft</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Cubes" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/mycubes">My Cubes</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/importcube">Import Cube</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      )
    }
  }
  return(
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Navbar.Brand href="/home">MTG Roto</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {renderNav()}
        {renderLogout()}
      </Navbar.Collapse>
    </Navbar>
  )
}
export default withRouter(Navigation);
