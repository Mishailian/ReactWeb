import React from "react";
import classes from './SendMesseg.module.css';

let SendMesseg = (props) => {
    let Text_input = React.createRef();

    let addMesseg = () => {
        props.addMesseg(Text_input.current.value)
    };

    return (
        <div className={classes.SendMesseg}>
            <textarea className={classes.Input} ref={Text_input} />
            <div className={classes.SendButton} onClick={addMesseg}></div>
        </div>
    );
}

export default SendMesseg;
