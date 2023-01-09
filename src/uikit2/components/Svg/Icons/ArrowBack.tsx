import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <rect x="16.0901" y="52.9099" width="6" height="69" rx="3" transform="rotate(-90 16.0901 52.9099)"/>
      <rect x="15.0901" y="50.0398" width="7" height="38" rx="3" transform="rotate(-45 15.0901 50.0398)"/>
      <rect width="7" height="38" rx="3" transform="matrix(0.707107 0.707107 0.707107 -0.707107 15.0901 49.9602)"/>
    </Svg>
  );
};

export default Icon;
