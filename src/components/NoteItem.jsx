import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

const NoteItem = ({ title, createdAt, body, id, onDelete, onArchive }) => {
  return (
    <div className="note-item">
      <NoteItemBody title={title} createdAt={createdAt} body={body} />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchive={onArchive} />
      </div>
    </div>
  );
};

export default NoteItem;
