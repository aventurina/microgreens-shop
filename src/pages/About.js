import { Container, ListGroup, ListGroupItem } from 'reactstrap';

export default function About() {
  return (
    <>
      <section className="page-subheader-section py-4 w-100">
        <h2 className="page-subheader-text display-8 fw-bold">About MeeMee’s Greens</h2>
      </section>

      <Container className="my-5">
        <h1 className="mb-4">About MeeMee’s Greens</h1>
        <p>
          Welcome to MeeMee’s Greens — your go-to online shop for fresh, locally grown microgreens
          delivered right to your doorstep. We’re passionate about providing nutrient-packed,
          flavorful microgreens that make healthy eating easy and delicious.
        </p>

        <section className="mt-5">
          <h2>Our Mission</h2>
          <p>
            At MeeMee’s Greens, we believe that eating fresh, wholesome greens should be simple,
            accessible, and enjoyable. That’s why we carefully grow and harvest each batch of
            microgreens with sustainable practices to ensure top quality and peak freshness.
          </p>
        </section>

        <section className="mt-4">
          <h2>Why Microgreens?</h2>
          <p>
            Microgreens are young vegetable and herb seedlings packed with intense flavor and
            concentrated nutrition. They’re rich in vitamins, minerals, and antioxidants that support
            your wellness every day. Whether you’re a home cook, a health enthusiast, or just looking
            to brighten your meals, microgreens add a fresh, tasty boost.
          </p>
        </section>

        <section className="mt-4">
          <h2>Our Promise</h2>
          <ListGroup flush>
            <ListGroupItem>
              <strong>Freshness:</strong> Harvested and shipped quickly to preserve flavor and nutrients.
            </ListGroupItem>
            <ListGroupItem>
              <strong>Quality:</strong> Grown using sustainable, eco-friendly methods.
            </ListGroupItem>
            <ListGroupItem>
              <strong>Variety:</strong> A curated selection of popular microgreens to suit all tastes and recipes.
            </ListGroupItem>
            <ListGroupItem>
              <strong>Customer Care:</strong> Dedicated support to help you enjoy the best greens possible.
            </ListGroupItem>
          </ListGroup>
        </section>

        <section className="mt-5">
          <p>
            Thank you for choosing MeeMee’s Greens. We’re excited to help you bring a little green
            goodness into your life!
          </p>
        </section>
      </Container>
    </>
  );
}
