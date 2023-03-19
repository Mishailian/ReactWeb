import React from "react";
import classes from './ListOfDialog.module.css';
import DialogOfUser from "./DialogOfUser/DialogOfUser";





function ListOfDialog(){

    let dialog_users = [
        {'id':1, 'user_name': 'Misha'},
        {'id':2, 'user_name': 'Misha'},
        {'id':3, 'user_name': 'Misha'},
        {'id':4, 'user_name': 'Misha'},
        ]
    
    let dialog_elements = dialog_users
    .map(user => <DialogOfUser UserName={user.user_name}/>);

    return(
        <div className={classes.ListOfDialog}>
            {dialog_elements}
        </div>
    );
}

export default ListOfDialog;