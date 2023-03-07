import React from "react";
import classes from './Messedge.module.css';

function Messedge(props){
    return(
        <div className={classes.Messedge}>    
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

export default Messedge;