import React from "react";
import Links from "./Links";

function About(props) {
    // If there is no bio, do not show the p element
    const bio = (props.bio !== undefined) && (props.bio !== null) && (props.bio !== "")

    return (
        <div id="about">
            <h2>About Me</h2>
            {bio ? <p>{props.bio}</p> : null}
            
            <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
            
            <Links github={props.github} linkedin={props.linkedin} />
        </div>
    );
}

export default About;
