import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todo from "./todo-component/todo";
import TodoList from "./todo-list-component/todo-list";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h1>My Todos</h1>
      <p className="me">Carlos Aguirre Orozco | A01336319</p>
      <div className="addTodo">
        <form action="/somewhere_else">
          <input type="text" name="todo" required/>
          <input className="button" type="submit" value="Add" />
        </form>
      </div>
      <TodoList/>
      <Todo id="1" name="Morning" />
      <Todo id="1" name="Morning" />
      <Todo id="1" name="Morning" done="true" />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
