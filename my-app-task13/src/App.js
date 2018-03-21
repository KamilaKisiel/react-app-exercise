import React, { Component } from 'react';

import ContactList from '../src/components/ContactList';
import AddContact from '../src/components/AddContact';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <AddContact/><br/>
                <ContactList/>
            </React.Fragment>
        );
    }
}

export default App