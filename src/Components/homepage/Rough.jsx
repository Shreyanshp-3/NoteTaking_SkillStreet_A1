
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomToast from './CustomToast';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function removeHtmlTags(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

export default function Sidebar() {
  const [selectedNote, setSelectedNote] = useState(null);
  const [savedNotes, setSavedNotes] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showFullNote, setShowFullNote] = useState({});

  const toggleFullNote = (index) => {
    setShowFullNote((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };



  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...savedNotes];
    const deletedNote = updatedNotes.splice(index, 1)[0];
    setSavedNotes(updatedNotes);

    // Update local storage after deleting the note
    localStorage.setItem("savedNotes", JSON.stringify(updatedNotes));

    // Show confirmation toast with styles
    toast.success(<CustomToast deletedNote={deletedNote} />, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  const handleSelectNote = (index) => {
    const selectedNote = savedNotes[index];
    console.log("Selected Note:", selectedNote);
  };

  const handleEditNote = (index) => {
    const editedNote = savedNotes[index];
    console.log("Edited Note:", editedNote);
  };

  useEffect(() => {
    const savedNotesFromLocalStorage = localStorage.getItem("savedNotes");
    if (savedNotesFromLocalStorage) {
      setSavedNotes(JSON.parse(savedNotesFromLocalStorage));
    }
  }, []);

  return (
    <div className="relative min-h-screen lg:flex">
      <button
        onClick={toggleSidebar}
        className="lg:hidden absolute top-10 right-4 p-2 focus:outline-none focus:ring"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* the sid ebar code starts here */}
      <div
        className={`lg:w-60 lg:flex-shrink-0 lg:flex lg:flex-col lg:h-screen ${showSidebar ? "block" : "hidden"
          }`}
      >
        <div className="h-screen p-3 bg-white shadow">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="space-y-3">
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Dashboard</h2>
            </div>

            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-md hover:bg-gray-100 transition duration-300 ease-in-out">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    <span className="text-lg font-semibold">Home</span>
                  </a>
                </li>
                <li className="rounded-md hover:bg-gray-100 transition duration-300 ease-in-out">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-lg font-semibold">Inbox</span>
                  </a>
                </li>
                <li className="rounded-md hover:bg-gray-100 transition duration-300 ease-in-out">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 4v6h4v-6m-2 10h8l-4-4m-2 4v6H6v-6m2-2h8"
                      />
                    </svg>
                    <span className="text-lg font-semibold">
                      <Link to="/addnote">Add New Note</Link>
                    </span>
                  </a>
                </li>
                <li className="rounded-md hover:bg-gray-100 transition duration-300 ease-in-out">
                  <a
                    href="#"
                    className="flex items-center p-3 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-lg font-semibold">Delete all</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>


      {/* the cards starts from here */}

      <div className="flex-1 container mx-auto mb-4 mt-12 lg:ml-60 ml-2">
        <div className="mb-5 ml-3">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hey chief!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            All the notes you saved
          </p>
        </div>

        <div className="relative ml-2">
          <span className="absolute inset-y-0 left-0 flex items-center py-4">
            <button
              type="submit"
              className="p-2 focus:outline-none focus:ring"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
          />
        </div>
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mr-10">
          {savedNotes.map((note, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md shadow-md hover:shadow-lg transition duration-300 relative"
            >
              <input
                type="checkbox"
                className="absolute top-2 right-2"
                onChange={() => handleSelectNote(index)}
              />

              <h2 className="text-xl font-semibold mb-2">{note.title}</h2>

              {showFullNote[index] ? (
                <p
                  className="text-gray-600 mb-4"
                  dangerouslySetInnerHTML={{ __html: note.body }}
                />
              ) : (
                <p className="text-gray-600 overflow-hidden line-clamp-2">
                  {removeHtmlTags(note.body)}
                </p>
              )}

              <div className="mt-4 flex space-x-2">
                <button
                  className="text-gray px-3 py-1 rounded-md border border-pink-300 hover:bg-pink-50 focus:outline-none focus:ring focus:border-pink-500"
                  onClick={() => {
                    if (window.confirm("Are you sure you want to delete this note?")) {
                      handleDeleteNote(index);
                    }
                  }}
                >
                  Delete
                </button>
                <button
                  className="text-gray px-3 py-1 rounded-md border border-pink-300 hover:bg-pink-50 focus:outline-none focus:ring focus:border-pink-500"
                  onClick={() => handleEditNote(index)}
                >
                  Edit
                </button>
                <button
                  className="text-gray px-3 py-1 rounded-md border border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring focus:border-blue-500"
                  onClick={() => toggleFullNote(index)}
                >
                  {showFullNote[index] ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
    </div >
  );
}