// 1
// Configure Store

import { configureStore } from "@reduxjs/toolkit";

// import all reducers
import todoReducer from '../features/todo/todoSlice';

export const store=configureStore({
    reducer:todoReducer
})