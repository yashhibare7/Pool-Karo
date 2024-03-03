import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function DeleteModal({ show, setShow, rideId }) {
  const handleClose = () => {
    setShow(false);
  };

  const handleDelete = async () => {
    try {
      const query = await axios.delete(
        `http://localhost:8080/api/delete-ride/${rideId}`
      );
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName={`modal-lg`}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Ride</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ color: "red", fontWeight: "bold" }}>
            Are you sure ? This action can't be un-done
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => handleDelete()}>
            Yes
          </Button>
          <Button variant="success" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
