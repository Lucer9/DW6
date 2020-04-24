import React from "react";
import Todo from "../todo-component/todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      todos: [],
    };

  }
  componentDidMount() {
    fetch("https://api.example.com/items")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        (
          <React.StrictMode>
            <Todo id="1" name="Morning" />
          </React.StrictMode>
        ),
        (
          <ul>
            {items.map((item) => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        )
      );
    }
  }
}

export default TodoList;
