import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <rect x="7.14233" y="11.3638" width="17" height="17" rx="3.09091"/>
      <rect x="7.14233" y="31.4546" width="17" height="17" rx="3.09091"/>
      <rect x="7.14233" y="51.5457" width="17" height="17" rx="3.09091"/>
      <rect x="7.14233" y="71.6362" width="17" height="17" rx="3.09091"/>
      <rect x="27.2333" y="71.6362" width="64.9091" height="17" rx="3.09091"/>
      <rect x="27.2333" y="51.5457" width="64.9091" height="17" rx="3.09091"/>
      <rect x="27.2333" y="31.4546" width="64.9091" height="17" rx="3.09091"/>
      <rect x="27.2333" y="11.3638" width="64.9091" height="17" rx="3.09091"/>
    </Svg>
  );
};

export default Icon;
