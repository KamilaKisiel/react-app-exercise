import React from 'react'

class ContactList extends React.Component {
    
    render() {
        const { contacts } = this.props;
        return (
            <React.Fragment>
                <h1>Contact List</h1>
                <ul>
                    {contacts.map(contact =>
                        <li key={contact.id}><strong>{contact.name}</strong>
                            <br/>{contact.phone}, {contact.email}
                        </li>
                    )}
                </ul>
            </React.Fragment>
        )
    }
}

export default ContactList;