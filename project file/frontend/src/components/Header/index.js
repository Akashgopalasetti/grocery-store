import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookies';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const token = Cookies.getItem("jwtToken");
  const adminToken = localStorage.getItem("adminJwtToken");
  const navigate = useNavigate();

  useEffect(() => {
    setIsAdmin(!!adminToken);
  }, [adminToken]);

  const onLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      Cookies.removeItem('adminJwtToken');
      Cookies.removeItem('jwtToken');
      localStorage.clear();
      navigate('/login');
    }
  };

  // Styles
  const navBarStyle = {
    backgroundColor: '#2f2f2f', // Dark cement
    padding: '0.75rem 2rem',
  };

  const linkStyle = {
    color: '#ffffff',
    fontWeight: '500',
    marginRight: '1rem',
    textDecoration: 'none',
  };

  const activeLinkStyle = {
    textDecoration: 'underline',
    color: '#facc15', // Yellow highlight
  };

  const brandStyle = {
    fontSize: '1.8rem',
    fontWeight: '700',
    letterSpacing: '1px',
    color: '#facc15',
    textDecoration: 'none',
  };

  return (
    <Navbar expand="lg" fixed="top" variant="dark" style={navBarStyle}>
      <Navbar.Brand>
        <Link to={isAdmin ? '/admin/dashboard' : '/'} style={brandStyle}>Grocery App</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          {isAdmin ? (
            <>
              <NavLink
                to="/admin/dashboard"
                style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}
              >
                Home
              </NavLink>
              <NavLink
                to="/admin/all-products"
                style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}
              >
                Products
              </NavLink>
              <NavLink
                to="/admin/orders"
                style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}
              >
                Orders
              </NavLink>
              <NavLink
                to="/admin/users"
                style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}
              >
                Users
              </NavLink>
              <NavDropdown title="More" id="admin-more-dropdown">
                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#">Reports</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Help</NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}
              >
                Home
              </NavLink>
              <NavLink
                to="/my-cart"
                style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}
              >
                My Cart
              </NavLink>
              <NavLink
                to="/my-orders"
                style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}
              >
                Orders
              </NavLink>
              <NavLink
                to="/my-history"
                style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}
              >
                History
              </NavLink>
            </>
          )}
        </Nav>

        <Nav className="ms-auto">
          {!token && !adminToken ? (
            <div className="d-flex align-items-center">
              <NavLink
                to="/login"
                style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}
              >
                User Login
              </NavLink>
              <span className="text-white mx-2">|</span>
              <NavLink
                to="/alogin"
                style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}
              >
                Admin Login
              </NavLink>
            </div>
          ) : (
            <NavLink
              to="/login"
              onClick={onLogout}
              style={({ isActive }) => ({ ...linkStyle, ...(isActive ? activeLinkStyle : {}) })}
            >
              Logout
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
