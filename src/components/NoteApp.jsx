import React from "react";
import { getInitialData } from "../utils";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      archive: [],
    };

    this.onDeleteHadler = this.onDeleteHadler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHadler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  render() {
    const notesUnarchived = this.state.notes.filter((note) => !note.archived);
    const notesArchived = this.state.notes.filter((note) => note.archived);
    // console.log({ notesArchived });
    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>Note App</h1>
          <div className="note-search">
            <input type="text" placeholder="Cari catatan" />
          </div>
        </div>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          {notesUnarchived.length > 0 ? (
            <NoteList
              notes={notesUnarchived}
              onDelete={this.onDeleteHadler}
              onArchive={this.onArchiveHandler}
            />
          ) : (
            <div className="notes-list__empty-message">
              <p>Tidak Ada Catatan</p>
            </div>
          )}
          <div className="notes-list">
            <h2>Arsip Note</h2>
          </div>
          {notesArchived ? (
            <NoteList notes={notesArchived} onDelete={this.onDeleteHadler} />
          ) : (
            <div className="notes-list__empty-message">
              <p>Tidak Ada Arsip</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default NoteApp;
