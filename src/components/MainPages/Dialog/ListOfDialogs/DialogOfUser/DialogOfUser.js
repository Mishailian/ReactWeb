import React from "react";
import classes from './DialogOfUser.module.css';

function DialogOfUser(props){
    return(
        <div className={classes.DialogOfUser}>    
            <div className={classes.avatar}>
                <img alt="" src=""/>
            </div>
            <div className={classes.UserText}>
                <div className={classes.UserName}>{props.UserName}</div>
                <p className={classes.UserStatus}>online</p>
            </div>
        </div>
    );
}

export default DialogOfUser;