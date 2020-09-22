
import React from 'react';
import './Char.css';

const Char = (props) => {
    return (
        <div className="Char" onClick={props.click}>
            <p onClick={props.click}>{props.value}</p>
        </div>
    );
}

export default Char;