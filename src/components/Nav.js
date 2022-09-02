import React from "react";
import { Link } from "react-router-dom";
import Auth from "./AuthButton";


export default function Nav(props){
    return(
        <nav className="nav">
            <h1><Link to="/">Pedro Bigas</Link></h1>
            <ul className="nav-links">
                <li><Auth/></li>
                <li><Link to="/aulas">Aulas</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
        </nav>
    )
}