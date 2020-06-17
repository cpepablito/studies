import React from 'react';



const userInput = (props) => {
    return (
        <div className="UserInput">
            <input type="text" onChange={props.changed} value={props.userName} />
        </div>
    );
}


const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{props.children}</p>
            <p>UserName: {props.userName}</p>
        </div>
    );
}



export { userInput as UserInput, userOutput as UserOutput };