import React, { useContext } from "react";
import { MainContentContext } from "../App";
import '../App.css';


const Footer = () => {

    const{mainContent} = useContext(MainContentContext)



    return (
        <div id="header">This is the footer
        <p>{mainContent}</p>
        <p></p>
        </div>
        

    );
};

export default Footer;