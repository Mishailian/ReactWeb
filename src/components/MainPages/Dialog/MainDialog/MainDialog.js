import React from "react";
import classes from './MainDialog.module.css';
import Messeg from "./Messeges/Messeg";
import SendMesseg from "./SendMesseg/SendMesseg";

function MainDialog(){
    return(
        <div className={classes.MainDialog}>
            <div className={classes.dialog}>
                <Messeg msg='hello wrld'></Messeg>
            </div>
            
            <SendMesseg/>
        </div>
    );
}

export default MainDialog;