import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useNavigate } from 'react-router-dom';  // Import useHistory
import { setTitle, setBody, clearNote } from '../../Redux/actions';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const NoteCreation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    // Initialize useHistory
  const { title, body } = useSelector((state) => state.note);
  const [bodyContent, setBodyContent] = useState(body);

  const handleTitleChange = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const handleBodyChange = (value) => {
    setBodyContent(value);
    dispatch(setBody(value));
  };

  const handleSaveNote = () => {
    // Retrieve existing notes from local storage
    const existingNotes = JSON.parse(localStorage.getItem('savedNotes')) || [];
  
    // Add the new note to the array
    const newNote = { title, body: bodyContent };
    const updatedNotes = [...existingNotes, newNote];
  
    // Save the updated array to local storage
    localStorage.setItem('savedNotes', JSON.stringify(updatedNotes));
  
    // Clear the form after saving
    dispatch(clearNote());
  
    // Redirect to the "/rough" page
    navigate('/rough');
  };
  

  useEffect(() => {
    // Load saved note data from local storage
    const savedNote = JSON.parse(localStorage.getItem('savedNote'));

    if (savedNote) {
      dispatch(setTitle(savedNote.title));
      dispatch(setBody(savedNote.body));
      setBodyContent(savedNote.body);
    }
  }, [dispatch]);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb-4">Create a New Note</h2>

      <div className="mb-4">
        <label htmlFor="noteTitle" className="block text-sm font-medium text-gray-600">
          Title:
        </label>
        <input
          type="text"
          id="noteTitle"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter title"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="noteBody" className="block text-sm font-medium text-gray-600">
          Body:
        </label>

        <ReactQuill
          id="noteBody"
          value={bodyContent}
          onChange={handleBodyChange}
          placeholder="Enter your note here"
        />
      </div>

      <button
        onClick={handleSaveNote}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Save Note
      </button>
    </div>
  );
};

export default NoteCreation;
