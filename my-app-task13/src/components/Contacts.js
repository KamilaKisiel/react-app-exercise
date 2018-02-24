import React, { Component } from 'react';
import ContactList from "./ContactList";
import AddContact from "./AddContact";

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: '1',
                name: 'Zenon Yeahbunny',
                phone: 888888888,
                email: 'example@mail.com',
                category: 'family'
            },
            {
                id: '2',
                name: 'Bożena Walec',
                phone: 333333333,
                email: 'example@mail.com',
                category: 'friend, job'
            },
            {
                id: '3',
                name: 'Adam Miauczyński',
                phone: 444444444,
                email: 'example@mail.com',
                category: 'job'
            }
        ],
    };

    addContact = ({name, phone, email, category}) => {
        return this.setState({
           contacts: this.state.contacts.concat({
                     id: Date.now().toString(32),
                     name: name,
                     phone: phone,
                     email: email,
                     category: category ? category : "none"
                 }
             )
         })
     };
    removeContact = contactId => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== contactId)
        })
    };

    render() {
        return (
            <React.Fragment>
                <AddContact addContact={this.addContact}/>
                <ContactList contacts={this.state.contacts} removeContact={this.removeContact}/>
            </React.Fragment>
        )
    }
}

export default Contacts;