
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

        return this._state;
    },
    _renderEntireTree(){

    },
    _refreshDom(func){
        this._renderEntireTree = func;
        console.log(this.renderEntireTree);
    },
    

    dispatch(action){
        if( action.type === 'ADD-USER' ){
            this._state.Dialog.ListOfDialogs.push(action.user_name);
            console.log(this._renderEntireTree);
            this._renderEntireTree(store);
            console.log(store);
        }
    },


};

export default store;