import { ListOfDialogsReduser } from "./ListOfDialogs-reduser";

let store = {
    _state: {
        'Dialog': {
            'ListOfDialogs': [
                { 'user_name': 'Misha' },
                { 'user_name': 'Misha' },
                { 'user_name': 'Misha' },
                { 'user_name': 'Misha' },
            ],
            'MainDialog': [],
        },
    },
    getState() {

        return this._state;
    },
    _renderEntireTree() {

    },
    subscribe(observer) {
        this._renderEntireTree = observer;
        console.log(this.renderEntireTree);
    },


    dispatch(action) {
        this._state.ListOfDialogs = ListOfDialogsReduser(this._state.Dialog.ListOfDialogs, action);
        this._renderEntireTree(store);
    },


};

export default store;
