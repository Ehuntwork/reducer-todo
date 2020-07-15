export const list = 
   [{
    item: 'Learn about reducers',
    completed: false,
    id: Date.now()
    }
]



export const reducer = (state, action)=>{
    switch(action.type){
    case "TOGGLE_COMPLETED":
        return ( 
            state.map(item => {
                console.log('item',item)
                console.log('action',action.payload)
                console.log(item.id)
                if(action.payload === item.id){
                  return {
                      ...item,
                      completed:!item.completed
                  }
                }
                else{
                  return item;
                }}))
            
    case "CLEAR_COMPLETED":
        return(
            state.filter(item=>!item.completed)
        )

        
    case "ADD_TASK":
        return [  
            ...state,
            {item: action.payload,
            id: Date.now(),
            completed: false}
        ]
    default:
        return state;
    };
}