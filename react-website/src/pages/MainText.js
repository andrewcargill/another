import React from "react";

import '../App.css';
import { Button } from "../components/Button";
import About from "./About";
import Home from "./Home";


const MainText = (props) => {
    {/* Handle the button click */}
    const handleClick = (value) => {
        props.onButtonClick(value);
    }

    {/* Decides what content to load */}
    const renderContent = (myProp) => {
        console.log('Render Content mainText', myProp)
        switch (myProp) {
            case "home":
                return(
                    <Home handleClick={handleClick}/>
                );
            case "about":
                return (
                    <About />
                );
            case "project":
                return (
                    <h1>Project</h1>
                );
            default:
                return ('none');
        }
        
    }

    return (
        <div className="main-text">MainText Component
        <div>{renderContent(props.state)}</div>
        <Button onClick={() => handleClick('about')} text="MainText Component About Button" />
        </div>
        

    );
};

export default MainText;