import React ,{useState} from 'react'

function ItemHook() {
  const [items, setItems] = useState([])
  const addItem = () => {
    setItems([...items,{id:items.length,value: Math.floor(Math.random()*10)}])
  }
  return (
    <div>
      <button onClick={addItem}>Add</button>
      <ol>
        {
          items.map(item => (
            <li key={item.id}>
              {item.id}:
              {item.value}
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default ItemHook
