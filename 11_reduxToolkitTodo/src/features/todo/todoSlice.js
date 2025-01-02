// 2
import { createSlice,nanoid } from "@reduxjs/toolkit"

// store initialy dikhta kesa hai starting mein
const initialState={
    todos:[{id:1,text:"hello world"}]
}

// now create slice
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    // make reducer
    reducers:{
        addTodo:(state,action)=>{
            // first object
            const todo={
                id:nanoid(),
                text:action.payload
            }
            // ab jo todo hai usko state mein bhi toh dalna pdhega
            // abhi state initialState ki values hold kre hai
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            // jo bhi id delete krni h usko sare todo mein check kro aur jo match nhi hue unko state.todos m daal do
            // jo match ho gyi usko delete kr do
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        }
    }
})


// export all reducers 
// individual reducers also 
export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer