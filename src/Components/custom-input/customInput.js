import React from "react";
import "./customInput.scss";

const CustomInput = (props) => {
    return (
        <span className="input">
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onInputChange}
                placeholder={props.placeholder}
            />
            <span></span>
        </span>
    );
};

export default CustomInput;
