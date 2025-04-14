import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const EventModal = ({ show, handleClose, handleSaveEvent }) => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventCategory, setEventCategory] = useState('');

  const handleSave = () => {
    handleSaveEvent(eventTitle, eventCategory);
    handleClose();
    setEventTitle('');
    setEventCategory('');
  };
  

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row g-3">
          <div className="col-12">
            <div>
              <label className="control-label form-label">Event Name</label>
              <input
                className="form-control"
                placeholder="Set Event Name"
                type="text"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                required
              />
              <div className="invalid-feedback">Please provide a valid event name</div>
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label className="control-label form-label">Category</label>
              <select
                className="form-control"
                value={eventCategory}
                onChange={(e) => setEventCategory(e.target.value)}
                required
              >
                <option value="">Select a category</option>
                <option value="bg-primary">Primary</option>
                <option value="bg-danger">Danger</option>
                <option value="bg-success">Success</option>
                <option value="bg-info">Info</option>
                <option value="bg-dark">Dark</option>
                <option value="bg-warning">Warning</option>
              </select>
              <div className="invalid-feedback">Please select a valid event category</div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EventModal;
