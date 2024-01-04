// EditNoteModal.js

import React from "react";

const EditNoteModal = ({
    title,
    body,
    handleEditTitle,
    handleEditBody,
    handleSaveEdit,
    handleCancelEdit,
}) => {
    return (
        <div className="bg-white p-4 rounded-md shadow-md z-10">
            <h2 className="text-xl font-semibold mb-2">Edit Note</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => handleEditTitle(e.target.value)}
                className="mb-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <textarea
                value={body}
                onChange={(e) => handleEditBody(e.target.value)}
                className="mb-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            <div className="flex space-x-2">
                <button
                    onClick={handleSaveEdit}
                    className="text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
                >
                    Save Changes
                </button>
                <button
                    onClick={handleCancelEdit}
                    className="text-gray-700 px-3 py-1 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default EditNoteModal;
