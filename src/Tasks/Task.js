import React, { Component } from 'react';
import './Task.css';

class Task extends Component {

    render() {
        return (
            <section className="task">
                <p>
                    {this.props.name}
                    {this.props.desc}
                    {this.props.deadline}
                </p>
            </section>
        );
    }
}

export default Task;