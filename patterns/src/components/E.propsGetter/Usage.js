import React from 'react';
import PropsGetter from "./PropsGetter";

export default function Usage({onToggle = (...args) => console.log('onToggle', ...args)}){
    const  greet = () => alert("rolla");
    return(
        <PropsGetter onToggle={onToggle}>
            {
                ({on, toggleProps}) =>
                    <div>
                        <h1>{on ? "I'm on" : "I'm off"}</h1>
                        <button {...toggleProps({onClick: greet})}>{on ? "on" : "off"}</button>
                    </div>

            }
        </PropsGetter>
    )
}
