import React from 'react';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { withRouter } from "react-router-dom";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from '../../constants/apiConstants';
function Navigation(props) {
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
  if(props.location.pathname === '/') {
    title = 'Welcome'
  }
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
	  axios({method: 'post', url: API_BASE_URL + '/api/v1/users/logout', headers: { 'Authorization': localStorage.getItem(ACCESS_TOKEN_NAME) }})
    localStorage.removeItem(ACCESS_TOKEN_NAME)
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
