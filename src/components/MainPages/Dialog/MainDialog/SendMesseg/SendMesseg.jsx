import React from "react";
import classes from './SendMesseg.module.css';

function SendMesseg(){
    let Text_input = React.createRef();

    let send = () => {
        let text = Text_input.current.value;
        alert(text);
    }

    return(
        <div className={classes.SendMesseg}>
            <textarea className={classes.Input} ref={Text_input}/>
            <div className={classes.SendButton} onClick={send}></div>
        </div>
    );
}

export default SendMesseg;