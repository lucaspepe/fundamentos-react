/* eslint-disable import/no-anonymous-default-export */
import './Input.css'
import React, { useState } from "react";

export default props => {

    const [valor, setValor] = useState('Digite aqui')

    function quandoMudar(e) {
        setValor(e.target.value)
    }
    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div>
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} readOnly/>
            </div>
        </div>
    )
}