import React from "react";
import '../MainPage.css'
import classes from './News.module.css';

function News(){
    return(
        <div className={`${classes.News} MainPage`}></div>
    );
}

export default News;