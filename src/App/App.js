import React, { Component } from 'react';
import './App.css';
import ListTask from "../Tasks/ListTask";

class App extends Component {
    render() {
        return (
            <section className="app-container app-container_block">
                <header className="app-container__title">
                    Cписок ваших задач:
                </header>
                <section className="app-container__content">
                    <ListTask />
                </section>
            </section>
        );
    }
}

export default App;
