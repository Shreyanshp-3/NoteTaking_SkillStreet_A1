// CustomToast.js
import React from 'react';

const CustomToast = ({ deletedNote, closeToast }) => (
  <div className="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-green-400 mr-2"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 1a1 1 0 100 2 1 1 0 000-2zm5.93 5.67a1 1 0 10-1.33-1.34l-6 6a1 1 0 000 1.34 1 1 0 001.33 0L15 8.34zM4 10a1 1 0 100 2 1 1 0 000-2z"
        clipRule="evenodd"
      />
    </svg>
    <span className="font-bold">Success:</span> Note "{deletedNote.title}" deleted successfully!
    <button onClick={closeToast} className="ml-4 focus:outline-none">
      Close
    </button>
  </div>
);

export default CustomToast;
