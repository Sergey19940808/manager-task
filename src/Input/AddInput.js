import React, { Component } from 'react';
import './Input.css';

class AddInput extends Component {
    render() {
        return (
            <section className="add-input">
                <label className="add-input__block">
                    <p className="add-input__name">
                        Название
                    </p>
                    <input type="text" name="name" className="add-input__field" />
                </label>
                <label className="add-input__block">
                    <p className="add-input__name">
                        Описание
                    </p>
                    <input type="text" name="desc" className="add-input__field" />
                </label>
                <label className="add-input__block">
                    <p className="add-input__name">
                        Приоритет
                    </p>
                    <input type="text" name="priority" className="add-input__field" />
                </label>
                <label className="add-input__block">
                    <p className="add-input__name">
                        Дедлайн
                    </p>
                    <input type="date" name="deadline" className="add-input__field" />
                </label>
                <button className="add-input__button">
                    Добавить
                </button>
            </section>
        );
    }
}

export default AddInput;