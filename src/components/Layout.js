import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartModal from './CartModal';
import CheckoutModal from './CheckoutModal';

export default function Layout({ cart, toggleCartModal, cartModalOpen, setCart }) {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
  };

  return (
    <>
      <Header cart={cart} toggleCartModal={toggleCartModal} />
      <main>
        <Outlet />
      </main>

      <CartModal
        isOpen={cartModalOpen}
        toggle={toggleCartModal}
        cart={cart}
        removeFromCart={removeFromCart}
        totalPrice={totalPrice}
        onProceedToCheckout={() => {
          toggleCartModal();
          setOrderComplete(false);
          toggleCheckoutModal();
        }}
      />

      <CheckoutModal
        isOpen={checkoutModalOpen}
        toggle={toggleCheckoutModal}
        orderComplete={orderComplete}
        formData={formData}
        handleChange={handleChange}
        handlePlaceOrder={handlePlaceOrder}
      />

      <Footer />
    </>
  );
}
