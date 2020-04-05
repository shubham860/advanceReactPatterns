import React from "react";
import Toggle from "./Toggle";

export default function Usage({onToggle = (...args) => console.log('onToggle', ...args)}){
    return(
          <Toggle onToggle={onToggle}>
              <Toggle.On>I'm On</Toggle.On><br/>
              <Toggle.Off>I'm Off</Toggle.Off><br/>
              <Toggle.Button/><br/>
          </Toggle>
          )}
