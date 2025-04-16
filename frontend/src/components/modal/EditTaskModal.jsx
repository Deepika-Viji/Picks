import React, { useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { DigiContext } from '../../context/DigiContext';
import CkEditor from '../ck-editor/CkEditor';
import Select from 'react-select';

const EditTaskModal = () => {
const {show,handleClose} = useContext(DigiContext)

const options = [
  { value: 'LewisStone', label: 'Lewis Stone' },
  { value: 'JackHolland', label: 'Jack Holland' },
  { value: 'LilyBurgess', label: 'Lily Burgess' },
  { value: 'HarrisonFrench', label: 'Harrison French' },
  { value: 'IsabelMellor', label: 'Isabel Mellor' },
  { value: 'AdamBates', label: 'Adam Bates' },
  { value: 'MillieLee', label: 'Millie Lee' },
  { value: 'MadeleineHart', label: 'Madeleine Hart' },
  { value: 'LouiseGoddard', label: 'Louise Goddard' },
  { value: 'JosephFrancis', label: 'Joseph Francis' },
  { value: 'KaiBarker', label: 'Kai Barker' },
  { value: 'ErinKnight', label: 'Erin Knight' },
  { value: 'JaydenTaylor', label: 'Jayden Taylor' },
  { value: 'SophieHilton', label: 'Sophie Hilton' },
  { value: 'LeahWright', label: 'Leah Wright' },
  { value: 'LewisHooper', label: 'Lewis Hooper' },
];

  return (
    <div>
      <Modal show={show} onHide={handleClose} size='lg' centered>
        <Modal.Header>
          <Modal.Title>Edit Task</Modal.Title>
          <Button variant="outline-primary" size="sm" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}>
          <i className="fa-light fa-times"></i>
        </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="row g-3">
            <div className="col-12">
              <label htmlFor="editTaskName" className="form-label">Name</label>
              <input type="text" id="editTaskName" className="form-control form-control-sm" placeholder="Task Name" value="Web Design & Development" />
            </div>
            <div className="col-12">
              <label htmlFor="editTaskAttchment" className="form-label">Attach File</label>
              <input type="file" id="editTaskAttchment" className="form-control form-control-sm" multiple />
            </div>
            <div className="col-sm-6">
              <label htmlFor="editTaskStartDate" className="form-label">Start Date</label>
              <input type="text" id="editTaskStartDate" className="form-control form-control-sm date-picker" placeholder="Eg: 12 Feb, 20" value="12 Feb, 23" readOnly />
            </div>
            <div className="col-sm-6">
              <label htmlFor="editTaskEndDate" className="form-label">End Date</label>
              <input type="text" id="editTaskEndDate" className="form-control form-control-sm date-picker" placeholder="Eg: 12 Feb, 20" value="12 Mar, 23" readOnly />
            </div>
            <div className="col-sm-6">
              <label className="form-label">Priority</label>
              <Form.Select className="form-control form-control-sm" data-placeholder="Select Priority">
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium" selected>Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </Form.Select>
            </div>
            <div className="col-sm-6">
              <label className="form-label">Repeat every</label>
              <Form.Select className="form-control form-control-sm" data-placeholder="Select Time">
                <option value="">Select Time</option>
                <option value="week">Week</option>
                <option value="2week" selected>2 Weeks</option>
                <option value="month">1 Month</option>
                <option value="2months">2 Months</option>
                <option value="3months">3 Months</option>
                <option value="6months">6 Months</option>
                <option value="year">1 Year</option>
              </Form.Select>
            </div>
            <div className="col-12">
                <label className="form-label">Assign To</label>
                <Select
                  isMulti
                  options={options}
                  placeholder="Eg: Natasha Hancock"
                />
              </div>
            <div className="col-12">
              <label className="form-label">Task Description</label>
              <CkEditor/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditTaskModal;
