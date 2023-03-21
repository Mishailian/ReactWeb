import React from "react";
import classes from './Dialog.module.css';
import '../MainPage.css'
import ListOfDialog from "./ListOfDialogs/ListOfDialog";
import MainDialog from "./MainDialog/MainDialog";

let Dialog = (props) => {
    return(
        <div className={`${classes.Dialog} MainPage`} >
            <ListOfDialog state={props.state} />
            <MainDialog addUserDialog={props.addUserDialog}/>
        </div>
    );
}

export default Dialog;