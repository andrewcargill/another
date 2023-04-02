import React, { useContext, useState } from "react";
import { MainContentContext } from "../App";
import "../App.css";
import { Button } from '../components/Button'


const Header = () => {

  const [mainText, setMainText] = useState('Default content');
  const { updateMainContent } = useContext(MainContentContext);

  const OnClickMainContent = (props) => {
    updateMainContent(props);
    setMainText(props)
  }
  return (
    <div id="header">
      <Button onClick={() => OnClickMainContent('Home')} text="Home" />
      <Button onClick={() => OnClickMainContent('About')} text="About" />
      <Button onClick={() => OnClickMainContent('Project')} text="Project" />
      <Button onClick={() => OnClickMainContent('Button Button')} text="Button Four" />
      <Button onClick={() => OnClickMainContent('Button Wow!')} text="Button Five" />
      <Button onClick={() => OnClickMainContent('Button Help')} text="Button Six" />
      <Button onClick={() => OnClickMainContent('Button Jesus!')} text="Button Seven" />
      <div>{mainText}</div>
      </div>
  );
};

export default Header;
