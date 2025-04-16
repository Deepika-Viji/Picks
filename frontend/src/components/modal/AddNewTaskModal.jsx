import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DigiContext } from '../../context/DigiContext';
import CkEditor from '../ck-editor/CkEditor';

const AddNewTaskModal = () => {
    const {showAddNewTaskModal, handleCloseAddNewTaskModal} = useContext(DigiContext)
    const [joiningDate, setJoiningDate] = useState(null);
    const [leaveDate, setLeaveDate] = useState(null);
  return (
    <Modal show={showAddNewTaskModal} centered onHide={handleCloseAddNewTaskModal} size='lg'>
      <Modal.Header>
        <Modal.Title id="addTaskModalLabel">Add New Task</Modal.Title>
        <Button variant="outline-primary" size="sm" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseAddNewTaskModal}>
          <i className="fa-light fa-times"></i>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="addTaskName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Task Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="addTaskAttachment">
            <Form.Label>Attach File</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
          <div className="row g-3">
            <div className="col-sm-6">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
              type="text"
              placeholderText="Eg: 12/06/2023"                        
              className="form-control form-control-sm date-picker"
              as={DatePicker}
              selected={joiningDate}
              onChange={date => setJoiningDate(date)}
              />
            </div>
            <div className="col-sm-6">
              <Form.Label>End Date</Form.Label>
              <Form.Control
              type="text"
              placeholderText="Eg: 12/06/2023"                        
              className="form-control form-control-sm date-picker"
              as={DatePicker}
              selected={leaveDate}
              onChange={date => setLeaveDate(date)}
              />            
            </div>
            <div className="col-sm-6">
              <Form.Label>Priority</Form.Label>
              <Form.Select>
                <option>Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </Form.Select>
            </div>
            <div className="col-sm-6">
              <Form.Label>Repeat every</Form.Label>
              <Form.Select>
                <option>Select Time</option>
                <option value="week">Week</option>
                <option value="2week">2 Weeks</option>
                <option value="month">1 Month</option>
                <option value="2months">2 Months</option>
                <option value="3months">3 Months</option>
                <option value="6months">6 Months</option>
                <option value="year">1 Year</option>
              </Form.Select>
            </div>
            <div className="col-12">
              <Form.Label>Assign To</Form.Label>
              <Form.Select>
                <option>Eg: Natasha Hancock</option>
                <option value="LewisStone">Lewis Stone</option>
                <option value="JackHolland">Jack Holland</option>
                <option value="LilyBurgess">Lily Burgess</option>
                <option value="HarrisonFrench">Harrison French</option>
                <option value="IsabelMellor">Isabel Mellor</option>
                <option value="AdamBates">Adam Bates</option>
                <option value="MillieLee">Millie Lee</option>
                <option value="MadeleineHart">Madeleine Hart</option>
                <option value="LouiseGoddard">Louise Goddard</option>
                <option value="JosephFrancis">Joseph Francis</option>
                <option value="KaiBarker">Kai Barker</option>
                <option value="ErinKnight">Erin Knight</option>
                <option value="JaydenTaylor">Jayden Taylor</option>
                <option value="SophieHilton">Sophie Hilton</option>
                <option value="LeahWright">Leah Wright</option>
                <option value="LewisHooper">Lewis Hooper</option>
              </Form.Select>
            </div>
            <div className="col-12">
              <Form.Label>Task Description</Form.Label>
              <CkEditor/>
            </div>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" size="sm" data-bs-dismiss="modal" onClick={handleCloseAddNewTaskModal}>
          Close
        </Button>
        <Button variant="primary" size="sm" onClick={handleCloseAddNewTaskModal}>
          Save Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNewTaskModal;
