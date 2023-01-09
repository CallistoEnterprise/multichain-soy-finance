import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 37 28" {...props}>
      <path d="M15.7335 3.2451C16.9329 1.62926 19.3517 1.62926 20.5512 3.2451L30.1765 16.2119C31.646 18.1914 30.233 21 27.7677 21H8.517C6.05168 21 4.63871 18.1914 6.10813 16.2119L15.7335 3.2451Z"/>
    </Svg>
  );
};

export default Icon;
