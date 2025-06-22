import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Layout from './components/Layout';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [cartModalOpen, setCartModalOpen] = useState(false);

  const toggleCartModal = () => setCartModalOpen((prev) => !prev);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              cart={cart}
              setCart={setCart}
              cartModalOpen={cartModalOpen}
              toggleCartModal={toggleCartModal}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route
            path="shop"
            element={
              <Shop
                cart={cart}
                setCart={setCart}
                cartModalOpen={cartModalOpen}
                toggleCartModal={toggleCartModal}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
