import { Container, Row, Col } from 'reactstrap';
import microgreens from '../assets/images/microgreens.png';
import Hero from '../components/Hero';

const Home = () => {
  const mdWidth = 10; // Medium breakpoint
  const lgWidth = 8;  // Large breakpoint

  return (
    <>
      <Hero />

      <Container>
        <Row className="justify-content-center mt-5 mb-4">
          <Col md={mdWidth} lg={lgWidth}>
            <img
              src={microgreens}
              alt="Fresh Microgreens"
              className="img-fluid shadow-sm home-main-img"
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={mdWidth} lg={lgWidth}>
            <p className="lead text-muted text-center mb-4 fw-bold">🌱 Welcome to MeeMee's Greens!</p>
            <p>
              At MeeMee’s Greens, we believe that good food begins with fresh, honest ingredients. That’s why we grow small-batch microgreens—vibrant, flavorful, and nutrient-dense—right from our home to your table.
            </p>
            <p>
              What started as a personal health journey has blossomed into a passion for sharing clean, organic greens with our community. Every tray is grown with organic seeds and soil, and lots of love.
            </p>
            <p>
              Whether you're adding them to salads, smoothies, or your favorite meals — our microgreens bring a burst of flavor and wellness to every bite. <b><i>Taste the difference that care makes!</i></b>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
