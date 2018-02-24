import React, { Component } from 'react'

const initialState = {
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    contactCategory: ''
}

class AddContact extends Component {
    state = initialState;

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addContact(this.state);

        this.setState(initialState);
    };

    inputRender = fieldName => {
        return (
            <input
                name={fieldName}
                placeholder={fieldName}
                onChange={this.handleChange}
            />
        )
    };

    render() {
        return (
            <React.Fragment>
                <h1>Add Contact</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.inputRender('name')} <br/>
                    {this.inputRender('phone')} <br/>
                    {this.inputRender('email')} <br/>
                    {this.inputRender('category')} <br/>
                    <button>Add Contact</button>
                </form>
            </React.Fragment>
        )
    }
}

export default AddContact;