<<<<<<< HEAD

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
=======
import {renderEntireTree} from '../render';

let state = {
    'Dialog': {
        'ListOfDialogs': [
            {'user_name': 'Misha'},
            {'user_name': 'Misha'},
            {'user_name': 'Misha'},
            {'user_name': 'Misha'},
            ],
        'MainDialog': [],
    },

} 

export let addUserDialog = (props) => {
    state.Dialog.ListOfDialogs.push({'user_name': props})
    renderEntireTree(state);
};

export default state;
>>>>>>> ca7ab3a2296723a2aa2a22f7bfeb0cd6724a4029
