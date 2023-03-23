import React from "react";
import classes from './MainDialog.module.css';
import Messeg from "./Messeges/Messeg";
import SendMesseg from "./SendMesseg/SendMesseg";

let  MainDialog = (props) => {
    return(
        <div className={classes.MainDialog}>
            <div className={classes.dialog}>
                <Messeg msg='hello wrld'></Messeg>
            </div>
            
            <SendMesseg dispatch={props.dispatch}/>
        </div>
    );
}

export default MainDialog;