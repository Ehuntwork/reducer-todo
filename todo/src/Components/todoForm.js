import React from 'react';

export default function todoForm(props){
    const {handleChanges, item, submit} = props
    return(
        <div className='todoForm'>
            <form onSubmit={submit}>
                <input
                type='text'
                name='item'
                value={item}
                onChange={handleChanges}
                />
                <button>add</button>
            </form>
        </div>
    )
}