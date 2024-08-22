import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // This is important for accessibility

const InviteModal = ({ isOpen, onRequestClose, performer }) => {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Performer Information"
      className="p-6 bg-gray-800 text-white rounded-lg max-w-md mx-auto my-20 relative"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <h2 className="text-2xl font-bold mb-4">{performer.name}</h2>
      <img src={performer.image} alt={performer.name} className="w-24 h-24 rounded-full mb-4 mx-auto" />
      <p className="text-gray-400 text-sm">{performer.description}</p>
      <button 
        onClick={onRequestClose}
        className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 rounded-lg"
      >
        Close
      </button>
    </Modal>
  );
};

export default InviteModal;
