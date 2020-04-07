import React from 'react';
import RenderProps from "./RenderProps";

export default function UsageProps({onToggle = (...args) => console.log('onToggle', ...args)}){
    return(
        <RenderProps onToggle={onToggle}>
            {
                ({on, toggle}) =>
                    <div>
                        <h1>{on ? "I'm on" : "I'm off"}</h1>
                        <button onClick={toggle}>{on ? "on" : "off"}</button>
                    </div>
            }
        </RenderProps>
    )
}
