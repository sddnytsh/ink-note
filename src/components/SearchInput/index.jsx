import React, { Component } from "react";
import { Search } from "lucide-react";
import "./index.scss";
import store from "../../redux/store";
import { searchNote } from "../../redux/actions";

export default class SearchInput extends Component {
  text = React.createRef();

  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }

  search = () => {
    store.dispatch(searchNote(this.text.current.value));
  };

  render() {
    const { theme } = store.getState();
    return (
      <div
        className={`search-container ${theme === "light" ? "light" : "dark"}`}
      >
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
