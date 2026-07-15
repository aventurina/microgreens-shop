import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import './Modals.css';

export default function CheckoutModal({
  isOpen,
  toggle,
  orderComplete,
  formData,
  handleChange,
  handlePlaceOrder,
}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="brand-modal" centered>
      <ModalHeader toggle={toggle}>Checkout</ModalHeader>
      <ModalBody>
        {orderComplete ? (
          <div className="order-success text-center" role="alert">
            Thank you for your order, {formData.name}! We will email you at {formData.email}.
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder} className="brand-form">
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                className="form-control"
                type="text"
                name="address"
                id="address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="d-flex gap-2">
              <Button className="btn-microgreen" type="submit">
                Place Order
              </Button>
              <Button className="btn-modal-secondary" onClick={toggle} type="button">
                Cancel
              </Button>
            </div>
          </form>
        )}
      </ModalBody>
    </Modal>
  );
}
