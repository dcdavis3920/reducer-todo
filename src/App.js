import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import { initialState, reducer } from "./ruducers/myReducer";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/TodoForm";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  function addItem(item) {
    const newItem = {
      toDo: item,
      completed: false,
      id: Date.now(),
    };
    dispatch({ type: "ADD_TODO", payload: newItem });
  }
  function toggleItem(id) {
    dispatch({ type: "COMPLETE_TODO", payload: id });
  }
  function clearTask() {
    dispatch({ type: "CLEAR_LIST" });
  }
  return (
    <div className="App">
      <ToDoForm addItem={addItem} />
      <ToDoList
        clearTask={clearTask}
        toggleItem={toggleItem}
        toDoTasks={state}
      />
    </div>
  );
}

export default App;
