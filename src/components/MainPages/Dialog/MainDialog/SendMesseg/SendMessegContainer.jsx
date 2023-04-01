import SendMesseg from "./SendMesseg";
import { connect } from "react-redux";

let mapDispatchToProps = (dispatch) => (

    {
        addMesseg: (text) => {
            dispatch(
                {
                    'type': 'Send-Messeg',
                    'mes': { 'mes': text },
                });
        }
    }

);

let mapStateToProps = (state) => {

};

const SendMessegContainer = connect(mapDispatchToProps, mapDispatchToProps)(SendMesseg);

export default SendMessegContainer;
