import React from "react";
import StoreContext from "../../../../StoreContext";
import classes from './MainDialog.module.css';
import Messeg from "./Messeges/Messeg";
import SendMessegContainer from "./SendMesseg/SendMessegContainer";

let MainDialog = (props) => {
<<<<<<< HEAD
    let meseges_list = props.state.state.SendMesseg.SendMesseg
        .map(meseg => <Messeg mes={meseg.mes}></Messeg>);
=======
>>>>>>> 4bd95210afb22bd13fc233b64c200844dd962e35

    return (
        <StoreContext.Consumer>
            {(store) => {

                let meseges_list = store.getState().SendMesseg.SendMesseg
                    .map(meseg => <Messeg mes={meseg.mes}></Messeg>);

                return (<div className={classes.MainDialog}>
                    <div className={classes.dialog}>
                        {meseges_list}
                    </div>
                    {/* <SendMesseg dispatch={props.dispatch} /> */}
                    <SendMessegContainer />
                </div>
                )
            }
            }
        </StoreContext.Consumer>
    );
}

export default MainDialog;



