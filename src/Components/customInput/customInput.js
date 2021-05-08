import React from "react";

const CustomInput = (props) => {
    console.log("test");
    return <input type={props.type} id={props.id} className="customInput" value={props.value} />;
};

export default CustomInput;
