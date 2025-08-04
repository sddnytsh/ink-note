import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import Note from "../../components/Note";
import "./index.scss";
import store from "../../redux/store";

export default class Home extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }

  render() {
    const { theme } = store.getState();
    return (
      <div className={theme === "light" ? "light" : "dark"}>
        <Sidebar />
        <Note />
      </div>
    );
  }
}
