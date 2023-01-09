import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 72 73" {...props}>
      <circle cx="35.9999" cy="36.3896" r="35.6747" fill="url(#paint0_linear)"/>
      <circle cx="35.9997" cy="36.3884" r="4.89036" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.228 68.8722C18.5338 67.6449 16.019 66.0924 13.7338 64.2646L20.7976 53.9979C12.133 46.4362 10.3269 33.4122 17.0028 23.7092C24.1887 13.265 38.4806 10.6236 48.9248 17.8095C57.2829 23.5601 60.6439 33.8617 57.9702 43.1002L51.7342 38.8096C52.4894 33.0549 50.0668 27.092 44.957 23.5764C37.6978 18.5818 27.7642 20.4177 22.7697 27.6769C17.7752 34.9361 19.6111 44.8697 26.8703 49.8642C31.9779 53.3784 38.4095 53.5111 43.5131 50.7525L49.7501 55.0437C43.6825 59.6268 35.6468 60.924 28.4177 58.4225L21.228 68.8722Z" fill="white"/>
      <defs>
      <linearGradient id="paint0_linear" x1="26.7721" y1="-1.88957" x2="34.1864" y2="44.521" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DB3931"/>
        <stop offset="1" stop-color="#E45C31"/>
      </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
