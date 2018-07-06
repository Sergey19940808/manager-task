import React, { Component } from 'react';
import './Task.css';
import Task from "./Task";

class ListTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    name: "One",
                    desc: "Test task for study",
                    deadline: "12.12.2018"
                },
                {
                    name: "Two",
                    desc: "Test task for study",
                    deadline: "13.12.2018"
                },
                {
                    name: "Three",
                    desc: "Test task for study",
                    deadline: "14.12.2018"
                }
            ]
        }
    }

    componentWillMount() {

    }

    render() {
        return (
            <section className="list-task">
                {
                    this.state.tasks.map((i)=>{
                        return (
                            <Task
                                key={i.name}
                                name={i.name}
                                desc={i.desc}
                                deadline={i.deadline}
                            />
                        )
                    })
                }
            </section>
        );
    }
}

export default ListTask;