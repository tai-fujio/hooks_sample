import React, { useState, useEffect, useRef } from 'react'

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
    <form action="" onSubmit={submitForm} className="todo">
      <input
        type="text"
        className="input"
        onChange={inputForm}
        value={list}>
      </input>
      <button
      >追加</button>
    </form>
  )
}

export default TodoForm
