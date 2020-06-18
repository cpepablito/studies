
import React from 'react';

const Validator = (props) => {
    return (
        <div className="Validator">
            {props.length > 5 ? <p>Text too short</p> : <p>Text long enough</p>}
        </div>
    );
}

export default Validator;