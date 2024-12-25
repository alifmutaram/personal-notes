import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../utils";

const NoteList = ({ notes, onDelete, onArchive }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          onDelete={onDelete}
          onArchive={onArchive}
          {...note}
          createdAt={showFormattedDate(note.createdAt)}
        />
      ))}
    </div>
  );
};

export default NoteList;
