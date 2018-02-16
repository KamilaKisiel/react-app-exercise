import React from 'react';

class Todo extends React.Component {
    render() {
        const { name, isFinished } = this.props;
        let className = 'todo';

        if (isFinished === true) {
            className += 'done' }

        return (
            <React.Fragment>
                <li className={className}>{name} {isFinished}</li>
            </React.Fragment>
        )
    }
    }

export default Todo;
