import React, { useState } from 'react'

function TodoForm({ addTodo }) {

  const [list, setList] = useState("");
  const inputForm = (e) => {
    setList(e.target.value);
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (!list) return;
    addTodo(list);
    setList("");
  };
  return (
    <div>
      <button className="button_todo2">TodoFormコンポーネント</button>
      <form action="" onSubmit={submitForm} className="todo">
        <input
          type="text"
          className="input"
          onChange={inputForm}
          value={list}
          placeholder="タスクを入力してください"
          style={{ width: '80%', height: '30px', fontsize: '28px', fontSize: 'inherit' }}
        >
        </input>
        <button
        >追加</button>
      </form >
    </div>
  )
}

export default TodoForm
