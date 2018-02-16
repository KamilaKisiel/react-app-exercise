import React from 'react';

import Todo from './Todo';
import AddTodo from './AddTodo';

export default class extends React.Component {
state = {
    todos: [
        {name: 'Listen to music', isFinished: false},
        {name: 'Go to the gym', isFinished: false},
        {name: 'Read a book', isFinished: false},
        {name: 'Call a friend', isFinished: false},
        {name: 'Take a nap', isFinished: false},
        {name: 'Play a game', isFinished: false},

    ],
};

    addNewTodo = (addTodo) => {
        const newTodo = { name: addTodo, isFinished: false };
        this.setState(() => ({ todos: [...this.state.todos, newTodo]}));
    };

render() {
    return <React.Fragment>
        {this.state.todos.map((todo) =>
            <Todo name={todo.name} isFinished={todo.isFinished}/>)}
        <AddTodo onAdded={this.addNewTodo}/>
    </React.Fragment>
}
};

