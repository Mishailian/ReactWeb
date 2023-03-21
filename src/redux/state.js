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