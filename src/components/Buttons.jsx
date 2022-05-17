import React from "react";


export default function Buttons({ handleValueChange }) {

    const array = [];

    for (let i = 0; i < 10; i++) {
        array[i] = i;
    }

    return (
        <div className="button-container">
            <button type="button" value="C" onClick={handleValueChange}>C</button>
            <button type="button" value="CE" onClick={handleValueChange} >CE</button>
            <button type="button" value="+" onClick={handleValueChange}>+</button>
            <button type="button" value="-" onClick={handleValueChange}>-</button>
            <button type="button" value="*" onClick={handleValueChange}>x</button>
            <button type="button" value="/" onClick={handleValueChange}>/</button>
            
            {array.map((numero, index) => <button key={index} type="button" value={numero} onClick={handleValueChange}>{numero}</button>)}
            <button type="button" value="." onClick={handleValueChange}>.</button>
            <button type="button" value="=" onClick={handleValueChange}>=</button>


        </div>

    )
}