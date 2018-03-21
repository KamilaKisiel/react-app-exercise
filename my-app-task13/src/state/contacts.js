
//initial state
const initialState = {
    data: [
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
    ]
};

//reducer
export default (state = initialState, action = {}) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                data: state.data.concat({
                    id: Date.now().toString(32),
                    name: action.contactName,
                    phone: action.contactPhone,
                    email: action.contactEmail,
                    category: action.contactCategory
                })
            };
        case 'REMOVE_CONTACT':
            return {
                ...state,
                data: state.data.filter(contact => contact.id!== action.removedContactId)
            };
        case 'UPDATE_CONTACT':
            return {
                ...state,
                data: state.data.map(
                    contact => contact.id !== action.updatedContactId
                    ? contact
                        : {
                            ...contact,
                            ...action.updatedContactId
                        }
                )
            };
        default:
            return state

    };
}