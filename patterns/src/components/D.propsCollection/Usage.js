import React from 'react';
import PropsCollection from "./PropsCollection";

export default function Usage({onToggle = (...args) => console.log('onToggle', ...args)}){
    return(
        <PropsCollection onToggle={onToggle}>
            {
                ({on, propsHeap}) =>
                        <div>
                            <h1>{on ? "I'm on" : "I'm off"}</h1>
                            <button {...propsHeap}>{on ? "on" : "off"}</button>
                        </div>

            }
        </PropsCollection>
    )
}
