import './Footer.css';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = ['Shop', 'About', 'Contact'];

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="4" className="mb-4">
            <h5 className="footer-brand">MeeMee's Greens</h5>
            <p className="small">
              Grown with love, harvested with care. Bringing microgreens from our garden to your table.
            </p>
          </Col>

          <Col md="4" className="mb-4">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="list-unstyled small footer-links">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`}>{link}</Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col md="4" className="mb-4">
            <h6 className="footer-heading">Contact</h6>
            <p className="small mb-2">info@meemeesgreens.com</p>
            <div className="d-flex align-items-center gap-2">
              <a
                href="https://instagram.com/meemeesgreens"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com/meemeesgreens"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="footer-hr" />
        <div className="text-center small footer-copyright">
          &copy; {new Date().getFullYear()} MeeMee's Greens. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
