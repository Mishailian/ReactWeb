import React from "react";
import classes from './MainDialog.module.css';
import Messeg from "./Messeges/Messeg";
import SendMessegContainer from "./SendMesseg/SendMessegContainer";

let MainDialog = (props) => {

    let meseges_list = props.state.SendMesseg.SendMesseg
        .map(meseg => <Messeg mes={meseg.mes}></Messeg>);

    return (
        <div className={classes.MainDialog}>
            <div className={classes.dialog}>
                {meseges_list}
            </div>
            {/* <SendMesseg dispatch={props.dispatch} /> */}
            <SendMessegContainer />
        </div>
    );
}

export default MainDialog;
