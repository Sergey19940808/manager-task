import React, { Component } from 'react';
import './Task.css';
import Task from "./Task";
import Input from "../Input/Input";

class ListTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            warning: ""
        }
    }

    componentWillMount() {
        localStorage.getItem("tasks") !== null ?
            this.setState({ tasks: JSON.parse(localStorage.getItem("tasks")) }) :
            this.setState({ tasks: [] })
    }

    addTask = () => {
        let name = document.querySelector("input[name=name]");
        let desc = document.querySelector("input[name=desc]");
        let priority = document.querySelector("select[name=priority]");
        let deadline = document.querySelector("input[name=deadline]");

        if (name.value !== "" && desc.value !== "") {
            this.setState(
                {
                    tasks: this.state.tasks.concat({
                        name: name.value,
                        desc: desc.value,
                        priority: priority.value,
                        deadline: deadline.value,
                        marked: false,
                        edit: false
                    })
                }, () => {
                    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
                }
            );

            name.value = "";
            desc.value = "";
            priority.value = "По умолчанию";
            deadline.value = "";
        } else if (name.value === "") {
            this.setState({ warning: "Похоже вы забыли ввести название и описание задачи" });
            setTimeout(() => {
                this.setState({ warning: "" });
            }, 1500)
        }


    };

    removeTask = (e) => {
        let indexElem = e.target.getAttribute("data-index");
        this.state.tasks.splice(indexElem, 1);
        this.setState({ tasks:  this.state.tasks});
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
    };

    markedTask = (e) => {
        let date = new Date();
        if (this.state.tasks[e.target.getAttribute("data-index")].marked === true) {
            this.state.tasks[e.target.getAttribute("data-index")].marked = false;
            this.state.tasks[e.target.getAttribute("data-index")].finishTime = "";
            this.setState({tasks: this.state.tasks});
            localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
        } else {
            this.state.tasks[e.target.getAttribute("data-index")].marked = true;
            this.state.tasks[e.target.getAttribute("data-index")].finishTime = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
            this.setState({tasks: this.state.tasks});
            localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
        }
    };

    editShow = (e) => {
        this.state.tasks[e.target.getAttribute("data-index")].edit = true;
        this.setState({ tasks:  this.state.tasks});

    };

    editTask = (e) => {
        let name = document.querySelector("input[name=name-edit]");
        let desc = document.querySelector("input[name=desc-edit]");
        let priority = document.querySelector("select[name=priority-edit]");
        let deadline = document.querySelector("input[name=deadline-edit]");

        if (name.value !== "" && desc.value !== "") {

            this.state.tasks[e.target.getAttribute("data-index")].name = name.value;
            this.state.tasks[e.target.getAttribute("data-index")].desc = desc.value;
            this.state.tasks[e.target.getAttribute("data-index")].priority = priority.value;
            this.state.tasks[e.target.getAttribute("data-index")].deadline = deadline.value;
            this.state.tasks[e.target.getAttribute("data-index")].edit = false;

            this.setState({tasks: this.state.tasks});

            localStorage.setItem("tasks", JSON.stringify(this.state.tasks))

        } else if (name.value === "") {
            this.setState({warning: "Похоже вы забыли ввести название и описание задачи"});
            setTimeout(() => {
                this.setState({warning: ""});
            }, 1500)
        }
    };

    filteredList = (e) => {
        if (e.target.textContent === "Все") {
            this.setState({tasks: JSON.parse(localStorage.getItem("tasks"))})
        } else {
            let list = JSON.parse(localStorage.getItem("tasks")).filter((item)=>{
                return item.priority === e.target.textContent
            });
            this.setState({tasks: list});
        }

    };

    render() {
        return (
            <section>
                <section className="filtered">
                    Фильтры:
                    <a href="#" className="task__link" onClick={this.filteredList}>Все</a>
                    <a href="#" className="task__link" onClick={this.filteredList}>Обычная</a>
                    <a href="#" className="task__link" onClick={this.filteredList}>Важная</a>
                    <a href="#" className="task__link" onClick={this.filteredList}>Очень важная</a>
                </section>
                <Input
                    addTask={this.addTask}
                />
                <section className="list-task">
                    <p className="notification">
                        {this.state.warning}
                    </p>
                    {
                        this.state.tasks.length > 0 ?
                            this.state.tasks.map((i, index)=>{
                                return (
                                    <Task
                                        key={index}
                                        name={i.name}
                                        desc={i.desc}
                                        priority={i.priority}
                                        deadline={i.deadline}
                                        finishTime={i.finishTime}
                                        marked={i.marked}
                                        edit={i.edit}
                                        index={index}
                                        editShow={this.editShow}
                                        editTask={this.editTask}
                                        removeTask={this.removeTask}
                                        markedTask={this.markedTask}
                                    />
                                )
                            }) : <em className="list-task__help">Добавьте свои задачи</em>
                    }
                </section>
            </section>
        );
    }
}

export default ListTask;