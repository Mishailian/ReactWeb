import React from "react";
import classes from './Dialog.module.css';
import '../MainPage.css'
import ListOfDialog from "./ListOfDialogs/ListOfDialog";
import MainDialog from "./MainDialog/MainDialog";

let Dialog = (props) => {
    return (
        <div className={`${classes.Dialog} MainPage`} >
            <ListOfDialog />
            <MainDialog state={props} />
        </div>
    );
}

export default Dialog;
