import React, { useContext } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { DigiContext } from '../../context/DigiContext';
const CreateFolderModal = () => {
    const {newFolderModal,handleNewFolderModalClose} = useContext(DigiContext)
  return (
    <Modal show={newFolderModal} onHide={() => {}} centered>
      <Modal.Header>
        <Modal.Title>Create New Folder</Modal.Title>
        <Button variant="outline-primary" size="sm" onClick={handleNewFolderModalClose}>
          <i className="fa-light fa-xmark"></i>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Label htmlFor="newFolderName">Folder Name</Form.Label>
          <Form.Control type="text" id="newFolderName" placeholder="Enter Folder Name" required />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={handleNewFolderModalClose}>
          Close
        </Button>
        <Button variant="success" size="sm">
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateFolderModal