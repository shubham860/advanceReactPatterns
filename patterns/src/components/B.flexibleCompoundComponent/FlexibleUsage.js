import React from "react";
import FlexibleCompound from "./FlexibleCompound";

export default function FlexibleUsage({onToggle = (...args) => console.log('onToggle', ...args)}){

    return(
          <FlexibleCompound onToggle={onToggle}>
              <FlexibleCompound.On>I'm On</FlexibleCompound.On>
              <FlexibleCompound.Off>I'm Off</FlexibleCompound.Off>
              <FlexibleCompound.Button/>
          </FlexibleCompound>
          )
}
