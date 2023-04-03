import React from "react";

import '../App.css';

const Home = ({ handleClick }) => {
	const onClick = () => {
	  handleClick('project');
	}
  
	return (
	  <div className="home">
		<h1>THIS IS THE HOME PAGE ELEMENT</h1>
		<button onClick={onClick}>Update MainText State to 'Project'</button>
	  </div>
	);
  };

export default Home;