import React, { Component } from "react";
import { Plus } from "lucide-react";
import "./index.scss";
import formatTime from "../../utilities/formatTime";
import store from "../../redux/store";
import { createNote } from "../../redux/actions";

export default class NewNoteButton extends Component {
  state = {
    isFormVisible: false,
  };

  createNewNote = () => {
    this.setState({ isFormVisible: true });
  };

  closeForm = () => {
    this.setState({ isFormVisible: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const type = formData.get("type");
    const createAt = formatTime();
    const description = "";
    const tags = [];
    const content = "";
    if (!title || !type) {
      alert("标题和类型不能为空！");
      return;
    }
    store.dispatch(
      createNote({ title, type, createAt, description, tags, content })
    );
    this.closeForm();
  };

  render() {
    return (
      <div className="create-container">
        <button onClick={this.createNewNote} className="create">
          <Plus className="plus" />
          新建笔记
        </button>
        {this.state.isFormVisible && (
          <div className="cover1">
            <div className="cover2" onClick={this.closeForm}></div>
            <div>
              <form onSubmit={this.handleSubmit}>
                <div className="title">
                  <h1>创建新笔记</h1>
                  <p>选择笔记类型并输入标题</p>
                </div>
                <div className="cin">
                  <label htmlFor="title">笔记标题</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="输入笔记标题..."
                    required
                  />
                </div>
                <div className="cin">
                  <label htmlFor="type">笔记类型</label>
                  <select id="type" name="type">
                    <option value="text">文本</option>
                    <option value="picture">图片</option>
                    <option value="voice">语音</option>
                    <option value="video">视频</option>
                  </select>
                </div>
                <button type="submit">创建按钮</button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
