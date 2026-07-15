import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem,
  Badge,
  Button,
} from 'reactstrap';
import './Modals.css';

export default function CartModal({
  isOpen,
  toggle,
  cart,
  removeFromCart,
  totalPrice,
  onProceedToCheckout,
}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="brand-modal" centered>
      <ModalHeader toggle={toggle}>Your Cart</ModalHeader>
      <ModalBody>
        {cart.length === 0 ? (
          <p className="text-muted mb-0">Your cart is empty.</p>
        ) : (
          <ListGroup flush>
            {cart.map((item) => (
              <ListGroupItem
                key={item.id}
                className="d-flex justify-content-between align-items-center cart-line-item"
              >
                <div className="d-flex align-items-center gap-2">
                  <span>{item.name}</span>
                  <Badge className="cart-qty-badge" pill>
                    {item.qty}
                  </Badge>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span className="cart-line-price">${(item.price * item.qty).toFixed(2)}</span>
                  <Button
                    size="sm"
                    className="cart-remove-btn"
                    onClick={() => removeFromCart(item)}
                    aria-label={`Remove one ${item.name}`}
                  >
                    &minus;
                  </Button>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
        {cart.length > 0 && (
          <h5 className="mt-3 cart-total">
            Total: <strong>${totalPrice.toFixed(2)}</strong>
          </h5>
        )}
      </ModalBody>
      <ModalFooter>
        {cart.length > 0 && (
          <Button className="btn-microgreen" onClick={onProceedToCheckout}>
            Proceed to Checkout
          </Button>
        )}
        <Button className="btn-modal-secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
