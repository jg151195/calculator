import React, { useState } from "react";
import Buttons from "./Buttons"


export default function App() {

    const [valor, setValor] = useState("");

    function handleValueChange(e) {
        const { value } = e.target;

        if (value === "=" && setValor(prevValor => prevValor = eval(prevValor)));
        if (value === "C" && setValor(prevValor => prevValor = ""));
        if (value === "CE" && setValor(prevValor => prevValor = prevValor.slice(0,-1)));
        else {
            setValor(prevValor => prevValor + value);
        }

    }

    if (valor.includes('=')|| valor.includes('C')) {
        setValor((prevValor) => {
            const newValue = prevValor.slice(0, -1);
            return newValue
        })
    }


    return (
        <div className="container">
            <div className="input-container">
                <input type="text" onChange={handleValueChange} value={valor}></input>
            </div>

            <Buttons handleValueChange={handleValueChange} valor={valor} />
        </div>


    )
}