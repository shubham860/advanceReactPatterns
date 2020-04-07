import React from "react";
import CompoundToggle from "./CompoundToggle";

export default function Usage({onToggle = (...args) => console.log('onToggle', ...args)}){

    return(
          <CompoundToggle onToggle={onToggle}>
              <CompoundToggle.On>I'm On</CompoundToggle.On>
              <CompoundToggle.Off>I'm Off</CompoundToggle.Off>
              <CompoundToggle.Button/>
          </CompoundToggle>
          )
}
