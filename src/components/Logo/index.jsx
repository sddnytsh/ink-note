import React, { Component } from "react";
import "./index.scss";
import store from "../../redux/store";

export default class Logo extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }

  render() {
    const { theme } = store.getState();
    return (
      <div>
        <div className={theme === "light" ? "logo1" : "logo2"}>
          <div>
            <span>墨</span>
          </div>
          <h1>墨记</h1>
        </div>
      </div>
    );
  }
}
