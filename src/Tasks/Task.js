import React, { Component } from 'react';
import './Task.css';
import Input from "../Input/Input";

class Task extends Component {

    render() {
        return (
            <section className="task">
                {
                    this.props.edit ?
                        <Input
                            type={"edit"}
                            name={this.props.name}
                            desc={this.props.desc}
                            priority={this.props.priority}
                            deadline={this.props.deadline}
                            index={this.props.index}
                            editTask={this.props.editTask}
                        />
                        :

                        <section>
                            <span className={this.props.marked ? "task__item marked" : "task__item"}>

                                {this.props.name}
                            </span>
                            <span className={this.props.marked ? "task__item marked" : "task__item"}>
                                {this.props.desc}
                            </span>
                            <span className={this.props.marked ? "task__item marked" : "task__item"}>
                                {this.props.priority}
                            </span>
                            <span className={this.props.marked ? "task__item marked" : "task__item"}>
                                {this.props.deadline}
                            </span>
                            <a href="#" data-index={this.props.index} className="task__link" onClick={this.props.editShow}>
                                Редактировать
                            </a>
                            <a href="#" data-index={this.props.index} className="task__link" onClick={ this.props.removeTask}>
                                Удалить
                            </a>
                            <a href="#" data-index={this.props.index} className="task__link" onClick={this.props.markedTask}>
                                {this.props.marked ? "Отменить выбор" : "Отметить как завершенную"}
                            </a>
                        </section>


                }
            </section>
        );
    }
}

export default Task;