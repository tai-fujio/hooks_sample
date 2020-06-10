import React, { useState, useEffect, useRef } from 'react'
import Todo from "./Todo"
import TodoForm from "./TodoForm"

function Mytodo() {
  // const [list, setList] = useState('');
  const [lists, setLists] = useState([
    { text: "This is a sample text.", isDone: false },
    { text: "This is a sample2 text.", isDone: true },
    { text: "This is a sample3 text.", isDone: false }
  ]);

  const addTodo = element => {

    const newlists = [...lists, { text: element }];

    setLists(newlists);

  }

  const complete = index => {
    const newlists = [...lists];
    newlists[index].isDone = true;
    setLists(newlists);
  };

  const clear = index => {
    const newlists = [...lists];
    newlists[index].isDone = false;
    setLists(newlists);
  }

  return (
    <div className="card-content">
      {lists.map((element, index) => (
        <Todo
          index={index}
          todo={element}
          complete={complete}
          clear={clear}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  )

}

export default Mytodo
