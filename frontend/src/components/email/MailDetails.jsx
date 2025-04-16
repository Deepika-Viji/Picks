import React, { useContext, useState } from 'react';
import { DigiContext } from '../../context/DigiContext';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const MailDetails = () => {
  const { mailDetailsOpen, handleMailDetailClose, handleMailShow } = useContext(DigiContext);
  const [firstMail, setFirstMail] = useState(false);
  const [secondMail, setSecondMail] = useState(false);

  const handleFirstMail = () => {
    setFirstMail(!firstMail);
  };

  const handleSecondMail = () => {
    setSecondMail(!secondMail);
  };

  return (
    <div className={`mail-details ${mailDetailsOpen ? '' : 'd-none'}`}>
      <div className="mail-body-top d-flex justify-content-between align-items-center mb-10">
        <div className="left d-flex align-items-center gap-2">
          <button className="btn btn-sm btn-icon btn-outline-danger close-mail" onClick={handleMailDetailClose}>
            <i className="fa-light fa-xmark"></i>
          </button>
          <span className="badge bg-secondary p-1 rounded">Inbox</span>
        </div>
        <div className="right d-flex align-items-center gap-3">
          <button className="btn-flush">
            <i className="fa-light fa-print"></i>
          </button>
          <button className="btn-flush expandReply" onClick={handleMailShow}>
            <i className="fa-light fa-expand"></i>
          </button>
        </div>
      </div>
      <OverlayScrollbarsComponent
        options={{
          className: "os-theme-light",
          scrollbars: {
            autoHide: 'scroll',
          },
        }}
      >
        <div className="mail-conversation">
          <div className="single-mail">
            <div className="mail-top" role="button" onClick={handleFirstMail}>
              <div className="mail-profile">
                <div className="avatar">
                  <img src="src/assets/images/avatar-2.png" alt="Image" />
                </div>
                <div className="part-txt">
                  <span className="name">Amelie Harris</span>
                  <span className="mail">amelianda@example.com</span>
                </div>
              </div>
              <div className="mail-action">
                <span className="date">
                  Jan 25<span className="d-sm-inline-block d-none">, 2023, 8:24 PM</span>
                </span>
                <button className="btn-star">
                  <i className="fa-solid fa-star"></i>
                </button>
              </div>
            </div>
            <div className={`mail-body ${firstMail ? '' : 'd-none'}`}>
              <p>Dear Sanoar Vai,</p>
              <p>
                As discussed with you over the phone. It would be very helpful for me to handle audits if I can enter
                holidays separately. Please get back to me for further explanation.
              </p>
              <p>Regards,</p>
              <p>Farhad Reza</p>
              <p>Assistant Manager I HR & Compliance</p>
            </div>
          </div>
          <div className="single-mail">
            <div className="mail-top" role="button" onClick={handleSecondMail}>
              <div className="mail-profile">
                <div className="avatar">
                  <img src="src/assets/images/avatar-2.png" alt="Image" />
                </div>
                <div className="part-txt">
                  <span className="name">Amelie Harris</span>
                  <span className="mail">amelianda@example.com</span>
                </div>
              </div>
              <div className="mail-action">
                <span className="date">
                  Jan 25<span className="d-sm-inline-block d-none">, 2023, 8:24 PM</span>
                </span>
                <button className="btn-star">
                  <i className="fa-solid fa-star"></i>
                </button>
              </div>
            </div>
            <div className={`mail-body ${secondMail ? 'd-none' : ''}`}>
              <p>Dear Sanoar Vai,</p>
              <p>
                As discussed with you over the phone. It would be very helpful for me to handle audits if I can enter
                holidays separately. Please get back to me for further explanation.
              </p>
              <p>Regards,</p>
              <p>Farhad Reza</p>
              <p>Assistant Manager I HR & Compliance</p>
            </div>
          </div>
        </div>
      </OverlayScrollbarsComponent>
      <div className="mail-reply-option">
        <div className="mail-reply d-none">
          <form>
            <input type="email" className="form-control form-control-sm mb-15" placeholder="To" value="amelianda@example.com" readOnly/>
            <div className="editor"></div>
            <div className="btn-box d-flex justify-content-end">
              <button className="btn btn-sm btn-primary">
                Send <i className="fa-light fa-paper-plane-top"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="btn-box gap-2 justify-content-end">
          <button className="btn btn-sm btn-primary reply-mail-btn">Reply</button>
          <button className="btn btn-sm btn-primary">Forward</button>
        </div>
      </div>
    </div>
  );
};

export default MailDetails;
