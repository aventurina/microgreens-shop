import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

export default function CheckoutModal({
  isOpen,
  toggle,
  orderComplete,
  formData,
  handleChange,
  handlePlaceOrder,
}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Checkout</ModalHeader>
      <ModalBody>
        {orderComplete ? (
          <div className="alert alert-success text-center" role="alert">
            Thank you for your order, {formData.name}! We will email you at {formData.email}.
          </div>
        ) : (
          <form onSubmit={handlePlaceOrder}>
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
            <Button className="btn-microgreen" type="submit">
              Place Order
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </form>
        )}
      </ModalBody>
    </Modal>
  );
}
