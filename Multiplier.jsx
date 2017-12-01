import React from "react";



// wrap in a <div> so there's only one top-level element
const Multiplier = ({ x, y })=> (
    <p className="text-primary">
	{x} multiplied by {y} = { x * y}    
    </p>
);


export default Multiplier;