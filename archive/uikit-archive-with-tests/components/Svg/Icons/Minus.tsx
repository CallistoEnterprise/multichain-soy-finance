import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <rect x="100.142" y="44.2856" width="11.4286" height="100" rx="4.28571" transform="rotate(90 100.142 44.2856)"/>
    </Svg>
  );
};

export default Icon;
