import './Footer.css';
import { Container, Row, Col } from 'reactstrap';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = ['Shop', 'About', 'Contact'];

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="4" className="mb-3">
            <h5>MeeMee's Greens</h5>
            <p className="small">
              Grown with love, harvested with care. Bringing microgreens from our garden to your table.
            </p>
          </Col>

          <Col md="4" className="mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled small">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col md="4" className="mb-3">
            <h6>Contact</h6>
            <p className="small mb-1">info@meemeesgreens.com</p>
            <div className="d-flex align-items-center gap-3">
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

        <hr />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} MeeMee's Greens. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
