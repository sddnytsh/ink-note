import React, { Component } from "react";
import { Search } from "lucide-react";
import "./index.scss";
import store from "../../redux/store";
import { searchNote } from "../../redux/actions";

export default class SearchInput extends Component {
  text = React.createRef();

  search = () => {
    store.dispatch(searchNote(this.text.current.value));
  };

  render() {
    return (
      <div className="search-container">
        <input
          ref={this.text}
          type="text"
          onChange={this.search}
          placeholder="搜索笔记..."
        />
        <Search className="search" />
      </div>
    );
  }
}
