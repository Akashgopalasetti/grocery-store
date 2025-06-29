// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Unavbar = () => {
  const get = localStorage.getItem('user');

  const linkStyle = {
    padding: '8px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontStyle: 'italic',
  };

  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#2f2f2f', padding: '0.75rem 1.5rem' }}>
      <Container>
        <Navbar.Brand>
          <Link to="/uhome" style={{ color: '#facc15', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.4rem' }}>
            Grocery Web App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/Admin/dashboard" style={linkStyle}>Dashboard</Link>
            <Link to="/admin/users" style={linkStyle}>Users</Link>
            <Link to="/admin/all-products" style={linkStyle}>Products</Link>
            <Link to="/admin/add-product" style={linkStyle}>Add Product</Link>
            <Link to="/admin/orders" style={linkStyle}>Orders</Link>
            <Link to="/" style={linkStyle}>Logout</Link>
            {/* <h4 style={{ color: "white", paddingTop: "0px" }}>({JSON.parse(get).name})</h4> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Unavbar;
