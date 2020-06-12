import React, { useState } from 'react'
import Todo from "./Todo"
import TodoForm from "./TodoForm"

function Mytodo() {
  const [lists, setLists] = useState([
    { text: "This is a sample text.", isDone: false },
    { text: "This is a sample2 text.", isDone: true },
    { text: "This is a sample3 text.", isDone: false }
  ]);

  const addTodo = element => {

    const newlists = [...lists, { text: element }];

    setLists(newlists);

  };
  const erase = index => {
    const newlists = [...lists];
    newlists.splice(index, 1);
    setLists(newlists);
  };

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
      <button className="button_todo3">MyTodoコンポーネント</button>
      {lists.map((element, index) => (
        <div>
          <button className="button_todo1">Todoコンポーネント</button>
          <Todo
            index={index}
            todo={element}
            complete={complete}
            clear={clear}
            erase={erase}
          />
        </div>
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  )

}

export default Mytodo
