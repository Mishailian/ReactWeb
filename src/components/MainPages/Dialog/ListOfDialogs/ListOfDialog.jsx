import React from "react";
import classes from './ListOfDialog.module.css';
import Messedge from "./Messedge/Messedge";

function ListOfDialog(){
    return(
        <div className={classes.ListOfDialog}>
            <Messedge UserName='Oleg Ivanov' />
            <Messedge UserName='Mihail Bondarenko' />
            <Messedge UserName='Ivan Tusuviev' />
            <Messedge UserName='Aleksndr Titov' />
            <Messedge UserName='Anastasia Likava' />
            <Messedge UserName='Jopa Jija' />
        </div>
    );
}

export default ListOfDialog;