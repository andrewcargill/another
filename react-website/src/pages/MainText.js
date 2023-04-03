import React, { useContext } from "react";
import { MainContentContext } from "../App";
import '../App.css';
import Home from "./Home";


const MainText = () => {

    const{mainContent} = useContext(MainContentContext)

    const renderContent = () => {
        console.log({mainContent})
        switch (mainContent) {
            case "Home":
                return(
                    <Home />
                );
            case "About":
                return (
                    <div>
                        <h1>About Page</h1>
                    </div>
                );
            case "Project":
                return (
                    <h1>Project</h1>
                );
            default:
                return ('none');
        }
        
    }

    return (
        <div id="header">MainText Component
        <div>{renderContent()}</div>
        <p>{mainContent}</p>
        </div>
        

    );
};

export default MainText;