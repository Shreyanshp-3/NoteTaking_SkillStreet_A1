import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NoteCreation = () => {
  const handleSaveNote = () => {
    toast.success('Note saved successfully!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <button onClick={handleSaveNote}>Save Note</button>
      <ToastContainer />
    </div>
  );
};

export default NoteCreation;
