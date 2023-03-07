import React from "react";
import classes from './SideBar.module.css';

function SideBar(){
    return(
        <div className={classes.SideBar}>
            <div className={classes.item}>Dialogs</div>
            <div className={classes.item}>News</div>
         </div>
    );
}

export default SideBar; 