import React from "react";
import classes from './SideBar.module.css';
import { Outlet, Link } from "react-router-dom";

let SideBar = () => {
    return(
            <div className={classes.SideBar}>
                <div className={classes.item}>
                    <Link to='/'>Home</Link>
                </div>
                <div className={classes.item}>
                    <Link to='/news'>News</Link>
                </div>
                <Outlet />
            </div>
    );
}

export default SideBar; 