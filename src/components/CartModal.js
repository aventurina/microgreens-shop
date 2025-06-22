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

export default function CartModal({
  isOpen,
  toggle,
  cart,
  removeFromCart,
  totalPrice,
  onProceedToCheckout,
}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Your Cart</ModalHeader>
      <ModalBody>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ListGroup>
            {cart.map((item) => (
              <ListGroupItem
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                <div>
                  {item.name}{' '}
                  <Badge className="btn-microgreen" pill>
                    {item.qty}
                  </Badge>
                </div>
                <div>
                  <Button
                    size="sm"
                    color="danger"
                    onClick={() => removeFromCart(item)}
                    className="btn-microgreen me-2"
                  >
                    -
                  </Button>
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
        {cart.length > 0 && (
          <h5 className="mt-3">
            Total: <strong>${totalPrice.toFixed(2)}</strong>
          </h5>
        )}
      </ModalBody>
      <ModalFooter>
        {cart.length > 0 && (
          <Button className="btn-microgreen" color="success" onClick={onProceedToCheckout}>
            Proceed to Checkout
          </Button>
        )}
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}
