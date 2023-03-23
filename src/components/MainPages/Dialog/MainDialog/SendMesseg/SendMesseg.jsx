import React from "react";
import classes from './SendMesseg.module.css';

// addUserDialog={props.addUserDialog}

let SendMesseg = (props) => {
    let Text_input = React.createRef();
    // props.addUserDialog(Text_input.current.value)
    
    let addUserDialog = () => {

        let text = {'user_name': Text_input.current.value};
        props.dispatch({
            'type': 'ADD-USER',
            'user_name': text
        });
    }
    
    return(
        <div className={classes.SendMesseg}>
            <textarea className={classes.Input} ref={Text_input}/>
            <div className={classes.SendButton} onClick={addUserDialog}></div>
        </div>
    );
}

export default SendMesseg;