import React from 'react';

const ConfirmationModel = ({ message, onConfirm, onCancel }) => {
  return (
    <div style={styles.modalBackground}>
      <div style={styles.modalContent}>
        <p>{message}</p>
        <div style={styles.buttonContainer}>
          <button style={styles.confirmButton} onClick={onConfirm}>Yes</button>
          <button style={styles.cancelButton} onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  modalBackground: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: '20px'
  },
  confirmButton: {
    marginRight: '10px',
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  },
  cancelButton: {
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  }
};

export default ConfirmationModel;