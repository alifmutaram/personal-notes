import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      limitChart: 50,
    };
    this.onTitleOnChangeHandler = this.onTitleOnChangeHandler.bind(this);
    this.onBodyOnChangeHandler = this.onBodyOnChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleOnChangeHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }
  onBodyOnChangeHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }
  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }
  render() {
    const titleChartLast = this.state.limitChart - this.state.title.length;
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">
            Sisa Karakter : {titleChartLast}
          </p>
          <input
            className="note-input__title"
            type="text"
            value={this.state.title}
            onChange={this.onTitleOnChangeHandler}
            maxLength={this.state.limitChart}
            placeholder="Masukan Judul"
          />
          <textarea
            className="note-input__body "
            type="text"
            value={this.state.body}
            onChange={this.onBodyOnChangeHandler}
            placeholder="Masukan Notes"
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}
export default NoteInput;
