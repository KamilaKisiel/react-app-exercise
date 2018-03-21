import React, { Component } from 'react'
import { connect } from 'react-redux'


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

    renderInput = fieldName => {
        return (
            <input
                name={fieldName}
                placeholder={fieldName}
                value={this.state[fieldName]}
                onChange={this.handleChange}
            />
        )
    };

    render() {
        return (
            <React.Fragment>
                <h1>Add Contact</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('contactName')} <br/>
                    {this.renderInput('contactPhone')} <br/>
                    {this.renderInput('contactEmail')} <br/>
                    {this.renderInput('contactCategory')} <br/>
                    <button>Add Contact</button>
                </form>
            </React.Fragment>
        )
    }
}

export default connect (
    state => ({
        contacts: state.contacts
    }),
    dispatch => ({
        addContact: ({
                         contactName,
                         contactPhone,
                         contactEmail,
                         contactCategory
        }) =>
            dispatch({
                type: 'ADD_CONTACT',
                contactName,
                contactPhone,
                contactEmail,
                contactCategory
            })
    })
)(AddContact);