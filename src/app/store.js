import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../src/features/userSlice";
import filterReducer from "../../src/features/filters/filterSlice";
import todoReducer from "../features/todos/todoSlice";
import flashcardReducer from "../features/flashcards/flashcardSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    todos: todoReducer,
    filters: filterReducer,
    flashcards: flashcardReducer,
  },
});
