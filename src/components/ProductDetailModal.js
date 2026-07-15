import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';
import './Modals.css';

export default function ProductDetailModal({
  isOpen,
  toggle,
  product,
  addToCart,
}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="brand-modal" centered>
      <ModalHeader toggle={toggle}>
        {product?.name}
      </ModalHeader>
      <ModalBody>
        {product && (
          <>
            <img
              src={product.image}
              alt={product.name}
              className="product-modal-image"
            />
            <p className="product-modal-description">{product.description}</p>
            <p className="product-modal-price">
              ${product.price.toFixed(2)}
            </p>
          </>
        )}
      </ModalBody>
      <ModalFooter>
        {product && (
          <Button
            className="btn-microgreen"
            onClick={() => {
              addToCart(product);
              toggle();
            }}
          >
            Add to Cart
          </Button>
        )}
        <Button className="btn-modal-secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
