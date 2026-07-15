import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => (
  <section className="hero-section py-5">
    <div className="hero-inner">
      <h1 className="hero-text hero-title display-4 fw-bold">
        Fresh. Flavorful. Homegrown.
      </h1>
      <p className="hero-text hero-subtitle lead">
        Nutritious microgreens delivered with love — straight from our garden to your plate.
      </p>
      <Link to="/shop" className="btn btn-microgreen-outline hero-cta">
        Shop Now
      </Link>
    </div>
  </section>
);

export default Hero;
