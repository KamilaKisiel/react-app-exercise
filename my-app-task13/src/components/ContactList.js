import React, { Component } from 'react'
import { connect } from 'react-redux'
import ToggleEditContactButton from './EditToggleButton';


class ContactList extends Component {

    handleRemoveContact = event => {
        const contactId = event.target.dataset.contactId;
        this.props.removeContact(contactId);
    };

    showCategories = () => {
        const { contacts } = this.props;
        return contacts.data
            .map(contact => contact.category.split(','))
            .reduce((current, next) => [...current,...next])
            .map(cat => ` [${cat.replace(" ", "")}]`)
            .filter((value, index, categoriesArray) => categoriesArray.indexOf(value) === index);

    };

    render() {
        const { contacts, removeContact } = this.props;

        return (
            <React.Fragment>
                <h1>Contact List</h1>
                <ul>
                    {contacts.data.map(contact =>
                        <li key={contact.id}><strong>{contact.name}</strong>
                            <br/>{contact.phone}, {contact.email},
                            <br/>{contact.category}
                            <br/><button onClick={this.handleRemoveContact} data-contact-id = {contact.id}>Remove Contact</button>
                        </li>
                    )}
                    <li>{this.showCategories().toString()}</li>
                </ul>
                <ToggleEditContactButton
                    contact={ contacts }
                    updateContact={ this.props.updateContact }
                />
            </React.Fragment>
        )
    }
}

export default connect(

    state => ({
        contacts: state.contacts
    }),

    dispatch => ({
        removeContact: (removedContactId) =>
            dispatch({
                type: 'REMOVE_CONTACT',
                removedContactId
            })
    })
)(ContactList);