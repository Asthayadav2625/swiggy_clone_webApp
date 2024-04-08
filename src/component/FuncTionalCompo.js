import { useState } from "react";

const FunctionalCompo=(props)=>{
    const[value1]=useState(0);
    const[value2]=useState(1);
    const {name,location}=props;
    return (
        <div>
            <h1>This is a functional component</h1>
            <h2>{name}</h2>
            <h2>{ location}</h2>
            <h2>Value:{value1}</h2>
        </div>
    );
};

export default FunctionalCompo;