import React from "react";

export const Greeting =(props) =>
{
    return(
        <p>
            Hello {props.name}! you are {props.age} years old.
        </p>
    );
};