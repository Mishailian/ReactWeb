import React from "react";
import classes from './Messeg.module.css'

function Messeg(props){
    return(
        <div className={classes.Messeg}>{props.msg}</div>
    );
}

export default Messeg;