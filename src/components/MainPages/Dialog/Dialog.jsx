import React from "react";
import classes from './Dialog.module.css';
import ListOfDialog from "./ListOfDialogs/ListOfDialog";
import MainDialog from "./MainDialog/MainDialog";

function Dialog(){
    return(
        <div className={classes.Dialog}>
            <ListOfDialog/>
            <MainDialog/>
        </div>
    );
}

export default Dialog;