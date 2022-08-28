import UserList from './UserList';
import './app.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [fullscreen, setFullscreen] = useState(true);

  return (
    <div >
      <div className='intro'>


    
      <h1>List Of Users</h1>
      <Button variant="primary" onClick={handleShow}>
        SHOW
      </Button>
      </div>
      <Modal className="my-modal" fullscreen={fullscreen}  show={show} onHide={handleClose}>
        <Modal.Body className='modal-content'><UserList/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
