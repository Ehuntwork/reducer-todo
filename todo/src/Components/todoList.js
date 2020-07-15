import React from 'react'

export default function TodoList(props){
  console.log(props.state)
  
  return (
    <div className="TodoList">
      {props.state.map(itemm => (
        <div className={`item${itemm.completed ? ' completed' : ''}`} onClick={() => props.toggleItem(itemm.id)}>
          <p>{itemm.item}</p>
        </div>
      ))}
      <button onClick={props.clearDone}>Clear</button>
    </div>
  );
};

