import { Container, Row, Col } from 'reactstrap';
import { FaLeaf, FaSeedling, FaBoxOpen, FaHeart } from 'react-icons/fa';
import './About.css';

const promises = [
  {
    icon: <FaLeaf />,
    title: 'Freshness',
    text: 'Harvested and shipped quickly to preserve flavor and nutrients.',
  },
  {
    icon: <FaSeedling />,
    title: 'Quality',
    text: 'Grown using sustainable, eco-friendly methods.',
  },
  {
    icon: <FaBoxOpen />,
    title: 'Variety',
    text: 'A curated selection of popular microgreens to suit all tastes and recipes.',
  },
  {
    icon: <FaHeart />,
    title: 'Customer Care',
    text: 'Dedicated support to help you enjoy the best greens possible.',
  },
];

export default function About() {
  return (
    <>
      <section className="page-subheader-section py-4 w-100">
        <h2 className="page-subheader-text display-5 fw-bold">About MeeMee's Greens</h2>
      </section>

      <Container className="my-5 about-content">
        <Row className="justify-content-center">
          <Col lg={8}>
            <p className="lead about-intro">
              Welcome to MeeMee's Greens — your go-to online shop for fresh, locally grown microgreens
              delivered right to your doorstep. We're passionate about providing nutrient-packed,
              flavorful microgreens that make healthy eating easy and delicious.
            </p>

            <section className="mt-5">
              <h2>Our Mission</h2>
              <p>
                At MeeMee's Greens, we believe that eating fresh, wholesome greens should be simple,
                accessible, and enjoyable. That's why we carefully grow and harvest each batch of
                microgreens with sustainable practices to ensure top quality and peak freshness.
              </p>
            </section>

            <section className="mt-4">
              <h2>Why Microgreens?</h2>
              <p>
                Microgreens are young vegetable and herb seedlings packed with intense flavor and
                concentrated nutrition. They're rich in vitamins, minerals, and antioxidants that support
                your wellness every day. Whether you're a home cook, a health enthusiast, or just looking
                to brighten your meals, microgreens add a fresh, tasty boost.
              </p>
            </section>
          </Col>
        </Row>

        <section className="mt-5">
          <h2 className="text-center mb-4">Our Promise</h2>
          <Row className="g-4">
            {promises.map((item) => (
              <Col sm={6} lg={3} key={item.title}>
                <div className="promise-card">
                  <div className="promise-icon">{item.icon}</div>
                  <h3 className="promise-title">{item.title}</h3>
                  <p className="promise-text">{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </section>

        <Row className="justify-content-center">
          <Col lg={8}>
            <p className="about-closing mt-5 text-center">
              Thank you for choosing MeeMee's Greens. We're excited to help you bring a little green
              goodness into your life!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
