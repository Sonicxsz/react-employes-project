import React from "react";
import './app-header.css'
const AppHeader = (props) =>{
    return (
        <div className="app-header d-flex">
            <h1>Arbi Hizriev</h1>
            <h2>{props.allPost} записей, из них понравилось {props.liked}</h2>
        </div>
    );
};

export default AppHeader;