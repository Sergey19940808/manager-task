import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            desc: this.props.desc,
            priority: this.props.priority,
            deadline: this.props.deadline
        }
    }

    changeName = (e) => {
        this.setState({name: e.target.value})
    };

    changeDesc = (e) => {
        this.setState({desc: e.target.value})
    };

    changePriority = (e) => {
        this.setState({priority: e.target.value})
    };

    changeDeadline = (e) => {
        this.setState({deadline: e.target.value})
    };

    render() {
        return (
            <section className={ this.props.type === "edit" ? "add-input-edit" : "add-input"}>
                <label className="add-input__block">
                    <p className="add-input__name">
                        Название
                    </p>
                    {
                        this.props.type === "edit" ?
                            <input type="text" value={this.state.name} onChange={this.changeName} name="name-edit" className="add-input__field"/>
                            :
                            <input type="text" name="name" className="add-input__field"/>
                    }
                </label>
                <label className="add-input__block">
                    <p className="add-input__name">
                        Описание
                    </p>
                    {
                        this.props.type === "edit" ?
                            <input type="text" value={this.state.desc} onChange={this.changeDesc} name="desc-edit" className="add-input__field"/>
                            :
                            <input type="text" name="desc" className="add-input__field"/>
                    }
                </label>
                <label className="add-input__block">
                    <p className="add-input__name">
                        Приоритет
                    </p>
                    <section className="add-input__priority">
                        {
                            this.props.type === "edit" ?
                                <select name="priority-edit" value={this.state.priority} onChange={this.changePriority}>
                                    <option>По умолчанию</option>
                                    <option>Обычная</option>
                                    <option>Важная</option>
                                    <option>Очень важная</option>
                                </select>
                                :

                                <select name="priority">
                                    <option>По умолчанию</option>
                                    <option>Обычная</option>
                                    <option>Важная</option>
                                    <option>Очень важная</option>
                                </select>
                        }
                    </section>
                </label>
                <label className="add-input__block">
                    <p className="add-input__name">
                        Дедлайн
                    </p>
                    {
                        this.props.type === "edit" ?
                            <input type="datetime-local" value={this.state.deadline} onChange={this.changeDeadline} name="deadline-edit" className="add-input__field"/>
                            :
                            <input type="datetime-local" name="deadline" className="add-input__field"/>
                    }
                </label>
                <span className="add-input__button">
                    <span data-index={this.props.index} className="add-input__button-text" onClick={this.props.type === "edit" ?
                        this.props.editTask : this.props.addTask}
                    >
                        {
                            this.props.type === "edit" ?
                                "Изменить"
                                :
                                "Добавить"
                        }

                    </span>
                </span>
            </section>
        );
    }
}

export default Input;