import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <rect x="2.00012" y="18.5519" width="29.793" height="29.793" rx="1.71883"/>
      <rect x="2.00012" y="51.6553" width="29.793" height="29.793" rx="1.71883"/>
      <rect x="35.1035" y="18.5519" width="29.793" height="29.793" rx="1.71883"/>
      <rect x="35.1035" y="51.6553" width="29.793" height="29.793" rx="1.71883"/>
      <rect x="68.207" y="18.5519" width="29.793" height="29.793" rx="1.71883"/>
      <rect x="68.207" y="51.6553" width="29.793" height="29.793" rx="1.71883"/>
    </Svg>
  );
};

export default Icon;
