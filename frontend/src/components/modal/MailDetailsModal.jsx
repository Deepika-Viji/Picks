import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { DigiContext } from '../../context/DigiContext';

function MailDetailsModal() {
const {showMailModal,handleMailClose, isLightTheme}=useContext(DigiContext)
const [firstMail, setFirstMail] = useState(false);
const [secondMail, setSecondMail] = useState(false);

const handleFirstMail = () => {
  setFirstMail(!firstMail);
};

const handleSecondMail = () => {
  setSecondMail(!secondMail);
}; 
return (
    <>
      <Modal show={showMailModal} onHide={handleMailClose} className='email-modal' size='xl' centered>
        <Modal.Header>
        <div className="mail-body-top d-flex justify-content-between align-items-center mb-10" style={{width:'100%'}}>
            <div className="left d-flex align-items-center gap-2">
                <button className="btn btn-sm btn-icon btn-outline-danger close-mail" onClick={handleMailClose}><i className="fa-light fa-xmark"></i></button>
                <span className="badge bg-secondary p-1 rounded">Inbox</span>
            </div>
            <div className="right d-flex align-items-center gap-3">
                <button className="btn-flush"><i className="fa-light fa-print"></i></button>
                <button className="btn-flush expandReply" onClick={handleMailClose}><i className="fa-light fa-compress"></i></button>
            </div>
        </div>
        </Modal.Header>
        <Modal.Body>
          <div className="single-mail">
            <div className="mail-top" role='button' onClick={handleFirstMail}>
                <div className="mail-profile">
                    <div className="avatar">
                        <img src="src/assets/images/avatar-2.png" alt="Image" />
                    </div>
                    <div className="part-txt" style={{color: isLightTheme? '#626262':'#adadad'}}>
                        <span className="name">Amelie Harris</span>
                        <span className="mail">amelianda@example.com</span>
                    </div>
                </div>
                <div className="mail-action">
                    <span className="date" style={{color: isLightTheme? '#626262':'#adadad'}}>Jan 25<span className="d-sm-inline-block d-none" style={{color: isLightTheme? '#626262':'#adadad'}}>, 2023, 8:24 PM</span></span>
                    <button className="btn-star"><i className="fa-solid fa-star"></i></button>
                </div>
            </div>
            <div className={`mail-body ${firstMail?'':'d-none'}`}>
                <p>Dear Sanoar Vai,</p>
                <p>As discussed with you over phone. It would be very helpful for me to handle audits if I can enter holidays separately. Please get back to me for further explanation.</p>
                <p>Regards,</p>
                <p>Farhad Reza</p>
                <p>Assistant Manager I HR &amp; Compliance</p>
            </div>
          </div>
          <div className="single-mail">
            <div className="mail-top" role='button' onClick={handleSecondMail}>
                <div className="mail-profile">
                    <div className="avatar">
                        <img src="src/assets/images/avatar-2.png" alt="Image" />
                    </div>
                    <div className="part-txt" style={{color: isLightTheme? '#626262':'#adadad'}}>
                        <span className="name">Amelie Harris</span>
                        <span className="mail">amelianda@example.com</span>
                    </div>
                </div>
                <div className="mail-action">
                    <span className="date" style={{color: isLightTheme? '#626262':'#adadad'}}>Jan 25<span className="d-sm-inline-block d-none" style={{color: isLightTheme? '#626262':'#adadad'}}>, 2023, 8:24 PM</span></span>
                    <button className="btn-star"><i className="fa-solid fa-star"></i></button>
                </div>
            </div>
            <div className={`mail-body ${secondMail?'d-none':''}`}> 
                <p>Dear Sanoar Vai,</p>
                <p>As discussed with you over phone. It would be very helpful for me to handle audits if I can enter holidays separately. Please get back to me for further explanation.</p>
                <p>Regards,</p>
                <p>Farhad Reza</p>
                <p>Assistant Manager I HR &amp; Compliance</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="btn-box gap-2 justify-content-end">
              <button className="btn btn-sm btn-primary reply-mail-btn">Reply</button>
              <button className="btn btn-sm btn-primary">Forward</button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MailDetailsModal;
