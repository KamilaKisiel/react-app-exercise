import React, { Component } from 'react'



class ContactList extends Component {

    showCategories = () => {
        const { contacts } = this.props;
        return contacts
            .map(contact => contact.category.split(','))

    };

    render() {
        const { contacts, removeContact } = this.props;

        return (
            <React.Fragment>
                <h1>Contact List</h1>
                <ul>
                    {contacts.map(contact =>
                        <li key={contact.id}><strong>{contact.name}</strong>
                            <br/>{contact.phone}, {contact.email}
                            <button onClick={() => removeContact(contact.id)}>Remove Contact</button>
                        </li>
                    )}
                    <li>{this.showCategories().toString()}</li>
                </ul>
            </React.Fragment>
        )
    }
}

export default ContactList;