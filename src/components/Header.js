import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/brandlogo.png';
import './Header.css';

const Header = ({ cart, toggleCartModal }) => {
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const links = ['Home', 'Shop', 'About', 'Contact'];

  return (
    <header>
      <Navbar expand="md" className="custom-navbar px-3 d-flex align-items-center">
        {/* Left section: Logo */}
        <div className="navbar-section left">
          <NavbarBrand href="/" className="brand-logo d-flex align-items-center">
            <img src={logo} alt="MeeMee's Greens Logo" />
          </NavbarBrand>
        </div>

        {/* Center section: Navigation links (desktop only) */}
        <div className="navbar-section center d-none d-md-flex">
          <Nav navbar className="main-nav mx-auto">
            {links.map((link) => (
              <NavItem key={link}>
                <NavLink
                  tag={RRNavLink}
                  to={`/${link.toLowerCase()}`}
                  exact
                  activeClassName="active-link"
                  className="nav-link-item"
                >
                  {link}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </div>

        {/* Right section: Icons and toggler */}
        <div className="navbar-section right d-flex align-items-center justify-content-end">
          {/* Desktop icons */}
          <div className="icon-group d-none d-md-flex">
            <Nav navbar className="icon-nav d-flex align-items-center gap-3">
              <NavItem>
                <NavLink href="#search" className="nav-icon">
                  <FaSearch size={20} />
                </NavLink>
              </NavItem>
              <NavItem>
                <button
                  className="btn nav-icon position-relative"
                  onClick={toggleCartModal}
                  aria-label="Open cart"
                >
                  <FaShoppingCart size={20} />
                  {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartCount}
                    </span>
                  )}
                </button>
              </NavItem>
            </Nav>
          </div>

          {/* Mobile toggler */}
          <NavbarToggler
            onClick={toggleSidebar}
            className="custom-toggler d-md-none ms-2"
            aria-label="Toggle sidebar"
          />
        </div>
      </Navbar>

      {/* Sidebar for mobile */}
      <div className={`mobile-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header d-flex justify-content-between align-items-center">
          <img src={logo} alt="MeeMee's Greens Logo" className="sidebar-logo" />
          <FaTimes className="close-icon" onClick={closeSidebar} aria-label="Close sidebar" />
        </div>

        <Nav navbar className="flex-column sidebar-links mt-4">
          {links.map((link) => (
            <NavItem key={link}>
              <NavLink
                tag={RRNavLink}
                to={`/${link.toLowerCase()}`}
                exact
                activeClassName="active-link"
                onClick={closeSidebar}
              >
                {link}
              </NavLink>
            </NavItem>
          ))}

          <div className="d-flex justify-content-start gap-3 mt-4 px-3">
            <FaSearch className="nav-icon" size={20} />
            <button
              className="btn btn-outline-dark position-relative"
              onClick={toggleCartModal}
              aria-label="Open cart"
            >
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </Nav>
      </div>

      {/* Overlay for sidebar */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar} />}
    </header>
  );
};

export default Header;
