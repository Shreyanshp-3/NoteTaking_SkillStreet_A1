/* global editedNote */

import React, { useState, useEffect } from 'react';

const EditNote = ({ note, onSave, onCancel }) => {
  const [editedNote, setEditedNote] = useState({ ...note });

  useEffect(() => {
    setEditedNote({ ...note });
  }, [note]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedNote);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Edit Note</h2>
        <label className="block mb-2">
          Title:
          <input
            type="text"
            name="title"
            value={editedNote.title}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </label>
        <label className="block mb-4">
          Body:
          <textarea
            name="body"
            value={editedNote.body}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </label>
        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
