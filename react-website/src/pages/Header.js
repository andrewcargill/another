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
    console.log(mainText)
  };

  return (
    <div id="header">
      
      <Button onClick={() => onClickMainContent('Home')} text="Project" />
      <Button onClick={() => onClickMainContent('Button Button')} text="Button Four" />
      <Button onClick={() => onClickMainContent('Button Wow!')} text="Button Five" />
      <Button onClick={() => onClickMainContent('Button Help')} text="Button Six" />
      <Button onClick={() => onClickMainContent('Button Jesus!')} text="Button Seven" />
      <div>{mainText}</div>

      <div>
        <h2>This is the 'MainText' component</h2>
        <MainText />
      </div>
      </div>
  );
};

export default Header;
