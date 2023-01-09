import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M50.751 60.0515L89.922 20.8805L100.142 31.1009L50.2751 80.9682L40.0547 70.7478L40.0561 70.7464L0.395966 31.0862L11.0908 20.3914L50.751 60.0515Z"/>
    </Svg>
  );
};

export default Icon;
