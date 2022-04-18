import React, { Component } from "react";

export class Todo extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { task: "Get Milk", id: 1 },
        { task: "Attend a Meeting", id: 2 },
      ],
      currTask: "",
    };
  }

  render() {
    return (
      <div>
        <input type="text" />
        <button>Add Task</button>

        <ul>
          {this.state.tasks.map((taskObj) => (
             <li>
              <p>{taskObj.task}</p>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
