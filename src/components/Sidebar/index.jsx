import React, { Component } from "react";
import Logo from "../Logo";
import SearchInput from "../SearchInput";
import NewNoteButton from "../NewNoteButton";
import TagList from "../TagList";
import NoteList from "../NoteList";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Logo />
        <SearchInput />
        <hr />
        <NewNoteButton />
        <hr />
        <TagList />
        <hr />
        <NoteList />
      </div>
    );
  }
}
