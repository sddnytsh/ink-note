import React, { Component } from "react";
import Card from "../Card";
import "./index.scss";
import store from "../../redux/store";

export default class NoteList extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }
  render() {
    const { notes, searchText, selectedNoteTags } = store.getState();
    let filteredNotes = searchText
      ? notes.filter((note) =>
          note.title.toLowerCase().includes(searchText.toLowerCase())
        )
      : notes;
    // if (selectedNoteTags.length > 0) {
    //   filteredNotes = filteredNotes.filter((note) =>
    //     selectedNoteTags.every((tag) => note.tags.includes(tag))
    //   );
    // } 交集
    if (selectedNoteTags.length > 0) {
      filteredNotes = filteredNotes.filter((note) =>
        selectedNoteTags.some((tag) => note.tags.includes(tag))
      );
    } //并集
    return (
      <div className="note-list">
        {notes.length === 0 ? (
          <div>新建一个笔记吧...</div>
        ) : (
          filteredNotes.map((note, _) => <Card key={note.id} note={note} />)
        )}
      </div>
    );
  }
}
