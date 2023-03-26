import React from "react";
import classes from './ListOfDialog.module.css';
import DialogOfUser from "./DialogOfUser/DialogOfUser";





let ListOfDialog = (props) => {

    let dialog_elements = props.state.Dialog.ListOfDialogs
        .map(user => <DialogOfUser UserName={user.user_name} />);

    return (
        <div className={classes.ListOfDialog}>
            {dialog_elements}
        </div>
    );
}

export default ListOfDialog;
