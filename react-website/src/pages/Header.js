import React, { useContext, useState } from "react";
import { MainContentContext } from "../App";
import "../App.css";
import { Button } from '../components/Button'
import MainText from "./MainText";


const Header = () => {

  const [mainText, setMainText] = useState('Default content');
  // const { updateMainContent } = useContext(MainContentContext);

  const onClickMainContent = (props) => {
    // updateMainContent(props);
    setMainText(props)
  };

  return (
    <div id="header">
      
      <Button onClick={() => onClickMainContent('home')} text="Home" />
      <Button onClick={() => onClickMainContent('about')} text="About" />
      
      <div>Main Text within Header</div>

      <div>
        <h2>This is the 'MainText' component</h2>
        <MainText onButtonClick={onClickMainContent} state={mainText} />
      </div>
      </div>
  );
};

export default Header;
