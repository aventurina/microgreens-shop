import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';

export default function ProductDetailModal({
  isOpen,
  toggle,
  product,
  addToCart,
}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {product?.name}
      </ModalHeader>
      <ModalBody>
        {product && (
          <>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', marginBottom: '1rem' }}
            />
            <p>{product.description}</p>
            <p>
              <strong>Price: </strong>${product.price.toFixed(2)}
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
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
