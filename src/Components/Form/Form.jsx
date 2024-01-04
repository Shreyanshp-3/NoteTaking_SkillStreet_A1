import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useNavigate } from 'react-router-dom';  // Import useHistory
import { setTitle, setBody, clearNote } from '../../Redux/actions';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { toast } from 'react-toastify';

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
    try {
      // Retrieve existing notes from local storage
      const existingNotes = JSON.parse(localStorage.getItem('savedNotes')) || [];

      // Add the new note to the array
      const newNote = { title, body: bodyContent };
      const updatedNotes = [...existingNotes, newNote];

      // Save the updated array to local storage
      localStorage.setItem('savedNotes', JSON.stringify(updatedNotes));

      // Clear the form after saving
      // dispatch(clearNote());

      // Redirect to the "/rough" page
      navigate('/notes', () => {
        // Show a toast notification after navigation
        toast.success('Note saved successfully!', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    } catch (error) {
      console.error('Error saving note:', error);
      // Handle error, show an error toast if needed
    }
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
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
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

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <button
          onClick={handleSaveNote}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save Note
        </button>
        <Link to="/notes" className="text-sm font-semibold leading-6 text-gray-900">
          My Notes →
        </Link>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

    </div>
  );
};

export default NoteCreation;
