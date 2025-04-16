import React, { useCallback, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { DigiContext } from '../../context/DigiContext';
import { useDropzone } from 'react-dropzone';

const UploadFileModal = () => {
    const {uploadModalOpen,handleUploadModalClose} = useContext(DigiContext)
    const onDropMultiple = useCallback((acceptedFiles) => {
        // Handle the multiple file upload
        console.log(acceptedFiles);
      }, []);
    
      const { getRootProps: getMultipleRootProps, getInputProps: getMultipleInputProps, isDragActive: isMultipleDragActive } = useDropzone({ onDrop: onDropMultiple, multiple: true });

  return (
    <Modal show={uploadModalOpen} size='lg' centered>
      <Modal.Header>
        <Modal.Title>Upload File</Modal.Title>
      </Modal.Header>
        <Modal.Body>
        <div className={`card-body ${isMultipleDragActive ? 'dropzone-active' : ''}`} {...getMultipleRootProps()}>
                  <form action="/file-upload" className="dropzone dz-component" id="file-manager-upload">
                    <input {...getMultipleInputProps()} />
                    {isMultipleDragActive ? (
                      <div className="dz-default dz-message"><button className="dz-button" type="button"><i className="fa-light fa-cloud-arrow-up"></i><span>Drop a file here or click to upload</span></button></div>
                    ) : (
                        <div className="dz-default dz-message"><button className="dz-button" type="button"><i className="fa-light fa-cloud-arrow-up"></i><span>Drop a file here or click to upload</span></button></div>
                        )}
                  </form>
                </div>     
        </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleUploadModalClose}>
          Close
        </Button>
        <Button variant="success">
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UploadFileModal