import React, { useState } from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
} from 'reactstrap';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <section className="page-subheader-section py-4 w-100">
        <h2 className="page-subheader-text display-8 fw-bold">Contact Us</h2>
      </section>

      <Container className="my-5" style={{ maxWidth: '600px' }}>
        <h1 className="mb-4">Contact Us</h1>
        <p>If you have any questions or feedback, feel free to reach out. We’d love to hear from you!</p>

        {submitted && (
          <Alert color="success" toggle={() => setSubmitted(false)}>
            Thank you for contacting us! We will get back to you shortly.
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject of your message"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="message">Message</Label>
            <Input
              id="message"
              name="message"
              type="textarea"
              placeholder="Write your message here..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <Button className="btn-microgreen mt-3" type="submit">
            Send Message
          </Button>
        </Form>
      </Container>
    </>
  );
}
