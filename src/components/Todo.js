import React, { useState, useEffect, useRef } from 'react'

function Todo({ index, todo, complete, clear }) {

  return (
    <div
      className="todo"
    >
      <div style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </div>
      {!todo.isDone ?
        <button onClick={() => complete(index)}>完了</button> : <button onClick={() => clear(index)}>戻す</button>}
    </div>
  )
}

export default Todo
