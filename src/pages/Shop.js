import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  CardImg,
} from 'reactstrap';
import { products } from '../data/products';
import ProductDetailModal from '../components/ProductDetailModal';
import CartModal from '../components/CartModal';
import CheckoutModal from '../components/CheckoutModal';

import '../App.css';

export default function Shop({ cart, setCart, cartModalOpen, toggleCartModal }) {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing.qty === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const toggleCheckoutModal = () => setCheckoutModalOpen(!checkoutModalOpen);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Your cart is empty.');
      setCheckoutModalOpen(false);
      return;
    }
    setOrderComplete(true);
    setCart([]);
    setFormData({ name: '', email: '', address: '' }); // reset form fields
  };

  const openProductModal = (product) => setSelectedProduct(product);
  const closeProductModal = () => setSelectedProduct(null);

  return (
    <>
      <section className="page-subheader-section py-4 w-100">
        <h2 className="page-subheader-text display-8 fw-bold">Shop Organic Microgreens</h2>
      </section>

      <Container className="my-4">
        <Row>
          {products.map((product) => (
            <Col sm={6} md={4} lg={3} key={product.id} className="mb-3">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={product.image}
                  alt={product.name}
                  style={{ cursor: 'pointer' }}
                  onClick={() => openProductModal(product)}
                />
                <CardBody>
                  <CardTitle tag="h5">{product.name}</CardTitle>
                  <CardText>${product.price.toFixed(2)}</CardText>
                  <Button className="btn-microgreen" onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        <ProductDetailModal
            isOpen={!!selectedProduct}
            toggle={closeProductModal}
            product={selectedProduct}
            addToCart={addToCart}
        />

        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          totalPrice={totalPrice}
          cartModalOpen={cartModalOpen}
          toggleCartModal={toggleCartModal}
          onCheckout={() => {
            toggleCartModal();
            setOrderComplete(false);
            setCheckoutModalOpen(true);
          }}
        />

        <CheckoutModal
          checkoutModalOpen={checkoutModalOpen}
          toggleCheckoutModal={toggleCheckoutModal}
          orderComplete={orderComplete}
          formData={formData}
          handleChange={handleChange}
          handlePlaceOrder={handlePlaceOrder}
        />
      </Container>
    </>
  );
}
