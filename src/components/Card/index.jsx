import React, { Component } from "react";
import "./index.scss";
import formatTime from "../../utilities/formatTime";
import store from "../../redux/store";
import { selectNote } from "../../redux/actions";

export default class Card extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }

  select = () => {
    store.dispatch(selectNote(this.props.note.id));
  };

  render() {
    const { selectedNoteId, theme } = store.getState();
    return (
      <div
        className={`card ${
          selectedNoteId === this.props.note.id ? "border" : ""
        } ${theme === "light" ? "light" : "dark"}`}
        onClick={this.select}
      >
        <h1>{this.props.note.title}</h1>
        <div className="description">{this.props.note.description}</div>
        <div className="identification">
          <div className="tags">
            {this.props.note.tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
          </div>
          <span className="date">{formatTime()}</span>
        </div>
      </div>
    );
  }
}
