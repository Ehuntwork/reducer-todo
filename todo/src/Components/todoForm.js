import React, {useState, useReducer} from 'react';
import TodoList from './todoList';
import {list, reducer} from '../Reducers/reducers';

export default function TodoForm(){
    const[task, setTask]= useState('')
    const [state, dispatch] = useReducer(reducer, list);

    const handleChanges = e =>{
      setTask(e.target.value)
    };

    const submit= e =>{
        e.preventDefault();
        setTask('')
    }

    const toggleItem=(itemId)=>{
        dispatch({type:'TOGGLE_COMPLETED', payload: itemId})
    }

    const  clearDone = e => {
        e.preventDefault();
        dispatch({type:'CLEAR_COMPLETED'})
    };

    return(
        <div className='todoForm'>
            <h2>Todo List</h2>
            <form onSubmit={submit}>
                <input
                type='text'
                name='item'
                value={task}
                onChange={handleChanges}
                />
                <button onClick={() =>
              dispatch({ type: "ADD_TASK", payload: task })
            }>add</button>
            </form>
            <TodoList 
            state={state} 
            toggleItem={toggleItem}
            onchange={onchange} 
            clearDone={clearDone}
            />
        </div>

    )
}