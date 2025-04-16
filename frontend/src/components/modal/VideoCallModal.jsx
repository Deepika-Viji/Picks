import React from 'react'
import { Modal } from 'react-bootstrap'

const VideoCallModal = ({showVideoCall,handleCloseVideoCall}) => {
  return (
    <Modal show={showVideoCall} onHide={handleCloseVideoCall} size='lg' centered>
        <Modal.Body>
            <div className="video-call">
                <div className="user">
                    <div className="user-preview">
                        <img src="assets/images/avatar-big.jpg" alt="User"/>
                    </div>
                    <div className="part-txt">
                        <span className="user-name">Amelie Harris</span>
                        <span className="call-status">Calling...</span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="call-option">
                        <button className="btn btn-sm rounded-circle btn-icon btn-outline-primary"><i className="fa-light fa-microphone-slash"></i></button>
                        <button className="btn btn-sm rounded-circle btn-icon btn-outline-primary"><i className="fa-light fa-video-slash"></i></button>
                        <button className="btn btn-sm rounded-circle btn-icon btn-outline-primary"><i className="fa-light fa-user-plus"></i></button>
                        <button className="btn btn-sm rounded-circle btn-icon btn-danger" onClick={handleCloseVideoCall} data-bs-dismiss="modal"><i className="fa-light fa-phone-hangup"></i></button>
                    </div>
                    <div className="admin-preview">
                        <img src="assets/images/admin.png" alt="Admin"/>
                    </div>
                </div>
            </div>
        </Modal.Body>
    </Modal>
  )
}

export default VideoCallModal