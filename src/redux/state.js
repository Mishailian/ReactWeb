
let store = {
    _state: {
        'Dialog': {
            'ListOfDialogs': [
                {'user_name': 'Misha'},
                {'user_name': 'Misha'},
                {'user_name': 'Misha'},
                {'user_name': 'Misha'},
                ],
            'MainDialog': [],
                },
            },
    getState() {
        return this.state
    },
    renderEntireTree(){},
};

// export let addUserDialog = (props) => {
//     state.Dialog.ListOfDialogs.push({'user_name': props})
//     renderEntireTree(state);
// };

// export default state;