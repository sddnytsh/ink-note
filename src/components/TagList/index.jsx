import React, { Component } from "react";
import { Tag } from "lucide-react";
import "./index.scss";
import store from "../../redux/store";
import { selectTag } from "../../redux/actions";

export default class TagList extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }

  select = (tag) => {
    store.dispatch(selectTag(tag));
  };

  render() {
    const { notes, selectedNoteTags } = store.getState();
    const allTags = Array.from(new Set(notes.flatMap((note) => note.tags)));
    return (
      <div className="tags-container">
        <div>
          <Tag className="tag-icon" /> 标签
        </div>
        <div className="tags">
          {notes.length === 0
            ? null
            : allTags.map((tag, index) => (
                <span
                  key={index}
                  className={`tag ${
                    selectedNoteTags.includes(tag) ? "selected" : ""
                  }`}
                  onClick={() => {
                    this.select(tag);
                  }}
                >
                  {tag}
                </span>
              ))}
        </div>
      </div>
    );
  }
}
