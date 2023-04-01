import React from "react";
import StoreContext from "../../../../../StoreContext";
import SendMesseg from "./SendMesseg";

let SendMessegContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let addMesseg = (text) => {
                    store.dispatch({
                        'type': 'Send-Messeg',
                        'mes': { 'mes': text },
                    });
                }


                return <SendMesseg addMesseg={addMesseg} />
            }
            }
        </StoreContext.Consumer>
    );
}

export default SendMessegContainer;
