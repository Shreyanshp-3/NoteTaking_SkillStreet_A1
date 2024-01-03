import React from 'react';

const NoteModal = ({ isOpen, handleClose, note }) => {
  return (
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mr-10">
      {savedNotes.map((note, index) => (
        <NoteCard
          key={index}
          note={note}
          index={index}
          handleSelectNote={handleSelectNote}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      ))}
    </div>
  );
};

export default NoteModal;
