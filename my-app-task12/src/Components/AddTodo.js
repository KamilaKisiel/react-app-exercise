import React from 'react';

class AddTodo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }
    onAdded = (input) => {
        this.setState({
            inputValue: input.target.value
        });
    };

    onClick = () => {
        this.props.onAdded(this.state.inputValue);
    };
    render() {
        return <React.Fragment>
            <input type='text' onChange={this.onAdded}/>
            <button onClick={this.onClick}>Add</button>
        </React.Fragment>
    }
}

export default AddTodo;