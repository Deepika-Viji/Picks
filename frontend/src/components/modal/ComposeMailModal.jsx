import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { DigiContext } from "../../context/DigiContext";
import CkEditor from '../ck-editor/CkEditor';
import { Link } from "react-router-dom";

const ComposeMailModal = () => {
  const { showComposeMail, handleComposeMailClose , isLightTheme } = useContext(DigiContext);
  const [modalSize, setModalSize] = useState("lg");

  const handleSizeChange = () => {
    if (modalSize === "lg") {
      setModalSize("xl");
    } else {
      setModalSize("lg");
    }
  };
  return (
    <Modal show={showComposeMail} onHide={handleComposeMailClose} size={modalSize} centered>
      <Modal.Header>
      <h5 style={{ color: isLightTheme ? '#464646' : 'inherit' }}>New Message</h5>
        <div className="btn-box">
          <button className="btn btn-sm btn-icon btn-outline-primary" onClick={handleComposeMailClose}>
            <i className="fa-light fa-minus"></i>
          </button>
          <button className="btn btn-sm btn-icon btn-outline-primary d-xl-inline-block d-none" onClick={handleSizeChange}>
            <i className="fa-light fa-arrow-up-right-and-arrow-down-left-from-center"></i>
          </button>
          <button className="btn btn-sm btn-icon btn-outline-primary" onClick={handleComposeMailClose}>
            <i className="fa-light fa-xmark"></i>
          </button>
        </div>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="d-flex gap-2 mb-15">
            <input type="email" className="form-control form-control-sm" placeholder="To" />
            <Link role="button" className="btn btn-sm btn-outline-primary add-cc">
              cc
            </Link>
            <Link role="button" className="btn btn-sm btn-outline-primary add-bcc">
              bcc
            </Link>
          </div>
          <input type="text" className="form-control form-control-sm mb-15 d-none input-cc" placeholder="Cc" />
          <input type="text" className="form-control form-control-sm mb-15 d-none input-bcc" placeholder="Bcc" />
          <input type="text" className="form-control form-control-sm mb-15" placeholder="Subject" />
          <div className="editor">
            <CkEditor />
          </div>
          <div className="d-flex justify-content-end gap-2 pt-3">
            <button type="reset" className="btn btn-sm btn-outline-danger" id="discardMail">
              Discard
            </button>
            <button className="btn btn-sm btn-primary">
              Send <i className="fa-light fa-paper-plane-top"></i>
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ComposeMailModal;
