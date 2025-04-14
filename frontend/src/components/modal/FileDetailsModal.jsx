import React, { useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { DigiContext } from '../../context/DigiContext';

const FileDetailsModal = () => {
    const {fileDeatailsModalOpen,handleFileDetailsModalClose} = useContext(DigiContext)
  return (
    <Modal show={fileDeatailsModalOpen} onHide={handleFileDetailsModalClose} size='lg' centered>
      <Modal.Header>
        <Modal.Title>File Details</Modal.Title>
      </Modal.Header>
      <Modal.Body className="file-details-modal">
        <div className="row g-4 align-items-center">
          <div className="col-sm-6">
            <div className="part-img">
              <img src="assets/images/product-img-2.png" alt="Image" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="part-txt">
              <ul className="file-details">
                <li>
                  <span>Uploaded on:</span> November 20, 2022
                </li>
                <li>
                  <span>Uploaded by:</span> Shaikh Abu Dardah
                </li>
                <li>
                  <span>File name:</span> image.jpg
                </li>
                <li>
                  <span>File type:</span> image/jpeg
                </li>
                <li>
                  <span>File size:</span> 104KB
                </li>
                <li>
                  <span>Dimensions:</span> 500 by 442 pixels
                </li>
              </ul>
              <Form className="add-details">
                <Form.Control type="text" className="form-control mb-15" placeholder="Alternative Text" />
                <Form.Control type="text" className="form-control mb-15" placeholder="Title" />
                <Form.Control type="text" className="form-control mb-15" placeholder="Caption" />
                <Form.Control as="textarea" className="form-control mb-15" placeholder="Description" />
                <Form.Control type="url" className="form-control" placeholder="File URL: www.imagename.com" />
              </Form>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={handleFileDetailsModalClose}>
          Close
        </Button>
        <Button variant="success" size="sm">
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FileDetailsModal;
