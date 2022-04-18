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
  

  handleChange = (e) =>{
           console.log(e.target.value)
           this.setState({
                  currTask : e.target.value
           })
  }

  handleAddTask = () =>{
      this.setState({
          tasks:[...this.state.tasks , {task : this.state.currTask , id : this.state.tasks.length+1}],
          currTask : ''  
      })
      
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.currTask} onChange={this.handleChange} />
        <button onClick={this.handleAddTask}>Add Task</button>

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
