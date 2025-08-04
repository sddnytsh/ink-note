import React, { Component } from "react";
import "./index.scss";
import { ChevronDown, ChevronUp, SunMoon } from "lucide-react";
import store from "../../redux/store";
import { theme } from "../../redux/actions";

export default class Settingsbar extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }

  state = {
    isActive: false,
  };

  open = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  changeTheme = () => {
    store.dispatch(theme());
  };

  render() {
    const { theme } = store.getState();
    return (
      <div
        className={`settings-container ${theme === "light" ? "light" : "dark"}`}
      >
        <div className="open" onClick={this.open}>
          <span>设置</span>
          {this.state.isActive ? <ChevronUp /> : <ChevronDown />}
        </div>
        {this.state.isActive ? (
          <div className="settings">
            <hr />
            <div className="items">
              <div className="item" onClick={this.changeTheme}>
                <span>主题</span>
                <SunMoon />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
