import React from "react";

function Links(props) {
    return (
        <div>
            <h3>Links</h3>
            <a href={props.git}>{props.git}</a>
            <a href={props.link}>{props.link}</a>
        </div>
    )
}

export default Links