import React, { Component } from "react";
import { Star, Save, Trash2, Calendar, Clock4, X, Plus } from "lucide-react";
import "./index.scss";
import store from "../../redux/store";
import {
  starNote,
  addTag,
  deleteTag,
  deleteNote,
  save,
} from "../../redux/actions";
import formatTime from "../../utilities/formatTime";
// import Card from "../Card";

export default class Note extends Component {
  tag = React.createRef();

  state = {
    content: "",
  };

  componentDidMount() {
    store.subscribe(() => {
      const { notes, selectedNoteId } = store.getState();
      const selectedNote = notes.find((note) => note.id === selectedNoteId);
      if (selectedNote && this.state.content !== selectedNote.content) {
        this.setState({ content: selectedNote.content });
      }
      this.setState({});
    });
  }

  star = () => {
    const { notes, selectedNoteId } = store.getState();
    const selectedNote = notes.find((note) => note.id === selectedNoteId);
    store.dispatch(starNote(selectedNote.id));
  };

  saveNote = () => {
    alert("文件已保存");
  };

  deleteNote = () => {
    const { notes, selectedNoteId } = store.getState();
    const selectedNote = notes.find((note) => note.id === selectedNoteId);
    const result = window.confirm("确定要删除此笔记吗？此操作不可恢复。");
    if (result) {
      store.dispatch(deleteNote(selectedNote.id));
    }
  };

  addTag = () => {
    const { notes, selectedNoteId } = store.getState();
    const selectedNote = notes.find((note) => note.id === selectedNoteId);
    if (selectedNote) {
      const tag = this.tag.current.value.trim();
      if (tag === "") {
        alert("标签不能为空！");
        return;
      }
      if (selectedNote.tags.length >= 5) {
        alert("最多只能添加 5 个标签！");
        return;
      }
      store.dispatch(addTag({ id: selectedNote.id, tag }));
      this.tag.current.value = "";
    }
  };

  deleteTag = (tag) => {
    const { notes, selectedNoteId } = store.getState();
    const selectedNote = notes.find((note) => note.id === selectedNoteId);
    if (selectedNote) {
      store.dispatch(deleteTag({ id: selectedNote.id, tag }));
    }
  };

  save = (e) => {
    const { notes, selectedNoteId } = store.getState();
    const selectedNote = notes.find((note) => note.id === selectedNoteId);
    const content = e.target.value;
    const updateAt = formatTime();
    this.setState({ content });
    if (selectedNote) {
      store.dispatch(save({ id: selectedNote.id, content, updateAt }));
    }
  };

  render() {
    const { notes, selectedNoteId, theme } = store.getState();
    const selectedNote = notes.find((note) => note.id === selectedNoteId);

    return selectedNote === undefined ? null : (
      // (
      //   <div className="note">
      //     {notes.length === 0
      //       ? null
      //       : notes.map((note, _) => <Card key={note.id} note={note} />)}
      //   </div>
      // )
      <div className={`note ${theme === "light" ? "light" : "dark"}`}>
        <div className="header">
          <div className="title">
            <h1>{selectedNote.title}</h1>
            <div className="icons">
              <div className="icon" onClick={this.star}>
                <Star className={selectedNote.isStarred ? "star" : ""} />
              </div>
              <div className="icon" onClick={this.saveNote}>
                <Save />
              </div>
              <div className="icon" onClick={this.deleteNote}>
                <Trash2 className="icon" />
              </div>
            </div>
          </div>
          <div className="time">
            <span>
              <Calendar />
              创建：{selectedNote.createAt}
            </span>
            <span>
              <Clock4 />
              更新：
              {selectedNote.updateAt === null
                ? selectedNote.createAt
                : selectedNote.updateAt}
            </span>
          </div>
          <div className="tags">
            {selectedNote.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
                <X
                  onClick={() => {
                    this.deleteTag(tag);
                  }}
                />
              </span>
            ))}
            <input ref={this.tag} type="text" placeholder="添加标签" />
            <span className="plus" onClick={this.addTag}>
              <Plus />
            </span>
          </div>
        </div>
        <hr />
        <div className="content">
          <textarea
            id="content"
            placeholder="请输入笔记内容"
            onChange={this.save}
            value={this.state.content}
          />
        </div>
      </div>
    );
  }
}
