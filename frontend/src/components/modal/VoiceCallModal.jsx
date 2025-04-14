import React from 'react'
import { Modal } from 'react-bootstrap'
const VoiceCallModal = ({showVoiceCall,handleCloseVoiceCall}) => {
  return (
    <Modal show={showVoiceCall} onHide={handleCloseVoiceCall} centered>
    <Modal.Body>
      <div className="voice-call">
        <div className="user">
          <div className="avatar avatar-lg">
            <img src="src/assets/images/avatar-2.png" alt="User" />
          </div>
          <span className="user-name">Amelie Harris</span>
          <span className="call-status">Calling...</span>
        </div>
        <div className="call-option">
          <button className="btn btn-sm rounded-circle btn-icon btn-outline-primary"><i className="fa-light fa-microphone-slash"></i></button>
          <button className="btn btn-sm rounded-circle btn-icon btn-outline-primary"><i className="fa-light fa-volume"></i></button>
          <button className="btn btn-sm rounded-circle btn-icon btn-outline-primary"><i className="fa-light fa-user-plus"></i></button>
          <button className="btn btn-sm rounded-circle btn-icon btn-danger" onClick={handleCloseVoiceCall}><i className="fa-light fa-phone-hangup"></i></button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
  )
}

export default VoiceCallModal