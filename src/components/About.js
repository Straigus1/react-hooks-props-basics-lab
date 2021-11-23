import React from "react";
import Links from "./Links";

function About(props) {
  const condMake = props.bio
  return (
    <div id="about">
      <h2>About Me</h2>
      {condMake ? <p>{condMake}</p> : ""}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links git={props.github} link={props.linkedin} />
    </div>
  ) 
  
  
}

export default About;
