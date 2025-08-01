import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import Note from "../../components/Note";
import "./index.scss";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Note />
      </div>
    );
  }
}
