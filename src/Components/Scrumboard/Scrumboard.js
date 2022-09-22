import React, { Component } from "react";
import UserData from "../../Static/data";
import TaskData from "../Tasks/taskData";
import { AddTask } from "./addTask";
import "./scrumboard.css";

export class Scrumboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: UserData,
      isOpen: false,
      tasks: [],
    };
  }

  addTask = (task) => {
    task.id = Math.random().toString(36).slice(2, 9);
    let tasks = [...this.state.tasks, task];
    this.setState({
      tasks,
    });
  };

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter((task) => {
      task.id !== id;
    }); 

    this.setState({
      tasks,
    });
  };
  render() {
    console.log("Logged in as", UserData.fullname);
    return (
      <div className="scrumboard">
        <nav>
          <h1>CHATSCRUM</h1>
          <div className="var">
            <p>User Type:{UserData.usertype}</p>
            <p>Project Name:{UserData.projectname}</p>
          </div>
        </nav>
        <p id="info">Hello {UserData.fullname} Welcome to your Scrumboard</p>

        <div className="task_sec">
          <TaskData data={this.state.tasks} deleteTask={this.deleteTask} />
        </div>

        <AddTask addTask={this.addTask} />
      </div>
    );
  }
}

export default Scrumboard;
