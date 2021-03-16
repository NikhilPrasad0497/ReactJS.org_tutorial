import React from 'react';

const person = (props) =>{
    return (
    <div>
        <p>I'm {props.name} a {props.age} Year old DBA with PayPal.inc currently learning ReactJs and aspiring to be a ReactJS Developer some day</p>
        <p>{props.children}</p>
    </div>
    )
};

export default person