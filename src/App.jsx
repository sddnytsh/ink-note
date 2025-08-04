import React, { Component } from "react";
import "./App.scss";
import Home from "./pages/Home";
import store from "./redux/store";

class App extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }

  render() {
    const { theme } = store.getState();
    return (
      <div className={`App ${theme === "light" ? "light" : "dark"}`}>
        <Home />
      </div>
    );
  }
}

export default App;
