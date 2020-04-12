import React from 'react';
import StateInitializer from "./StateIntializer";

export default function Usage({
                              onReset = (...args) => console.log('onReset', ...args)}){
    const  greet = () => alert("rolla");

    const onToggle = (...args) => console.log('onToggle', ...args);

    const onInitial = false;
    return(
        <StateInitializer onToggle={onToggle} onInitial={onInitial} onReset={onReset}>
            {
                ({on, toggleProps, reset}) =>
                    <div>
                        <h1>{on ? "I'm on" : "I'm off"}</h1>
                        <button {...toggleProps({onClick: greet})}>{on ? "on" : "off"}</button>
                        <button onClick={() => reset()}>{on ? "on" : "off"}</button>
                    </div>
            }
        </StateInitializer>
    )
}
