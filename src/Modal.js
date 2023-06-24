
import React, { useState } from 'react';
import '../src/Modal.scss'

function Modal() {

    const [isOpen, setIsOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };

    
     const handleCheckboxChange = () => {
    setIsChecked((prevChecked) => !prevChecked);
  };


  return (
    <>
    <h2>Task 2</h2>
    <button onClick={openModal}>Open Modal</button>

     
        {isOpen && (
  <div className="modal-overlay" >
    <div className="modal-content">
      {/* Modal content */}
      <h2>Hospital Journey</h2>
      <header>
    <div className="header-left">
      <h3>John Carter</h3>
    </div>
    <div className="header-right">
      <h4>Resident of Germany</h4>
    </div>
  </header>

  <main>
    <form>
      <h3>Patient Information</h3>
      <div className="form-group">
        <label for="patient-id">Patient ID:</label>
        <input type="text" id="patient-id" name="patient-id"  value={"5321344"} required/>
      </div>
      <div className="form-group">
        <label for="visit-id">Visit ID:</label>
        <input type="text" id="visit-id" name="visit-id" value={"2735678"} required/>
      </div>
      <div className="form-group">
        <label for="ward">Ward:</label>
        <input type="text" id="ward" name="ward" value={"Ward2A"} required/>
      </div>
      <div className="form-group">
        <label for="bed-number">Bed :</label>
        <input type="text" id="bed" name="bed" value={"Single bed"} required/>
      </div>
      <div className="form-group">
        <label for="payor">Payor:</label>
        <input type="text" id="payor" name="payor" value={"AIA BHD (INDIVIDUAL)"} required/>
      </div>
      <button type="submit">Submit</button>
    </form>

    <div className="admission-journey">
    <h2><input type="checkbox" id="checkbox1" checked={isChecked} onChange={handleCheckboxChange}/>Admission Journey</h2>
      {isChecked && (
        <div className="admission-journey-content show">
        <h3>Addmission Request</h3>
        <p>Ratha Ap <br/>|</p>
        <h3>Sent for IGL Approval</h3>
        <p>Jim Chin <br/>|</p>
        <h3>Recieved IGL Approval</h3>
        <p>Jim Chin</p>
      </div>
      )}
    </div>
  </main>

      {/* Close button */}
      <button onClick={closeModal} >Close</button>
    </div>
  </div>
)}
    </>
  )
}

export default Modal