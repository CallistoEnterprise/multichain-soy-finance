import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <circle cx="41.3713" cy="42.4673" r="9.28016" transform="rotate(13.5456 41.3713 42.4673)" fill="#97B629"/>
      <ellipse cx="37.4257" cy="54.8805" rx="10.2082" ry="9.28016" transform="rotate(13.5456 37.4257 54.8805)" fill="#97B629"/>
      <ellipse cx="35.4344" cy="63.6502" rx="7.76971" ry="11.0996" transform="rotate(28.2072 35.4344 63.6502)" fill="#97B629"/>
      <circle cx="56.6198" cy="45.4929" r="12.2138" fill="#B1D237"/>
      <ellipse cx="55.3982" cy="62.592" rx="13.4352" ry="12.2138" fill="#B1D237"/>
      <ellipse cx="55.5536" cy="74.4281" rx="10.2259" ry="14.6084" transform="rotate(14.6616 55.5536 74.4281)" fill="#B1D237"/>
      <ellipse cx="57.4288" cy="19.2824" rx="3.66415" ry="9.77107" transform="rotate(18.8887 57.4288 19.2824)" fill="#88D949"/>
      <ellipse cx="70.824" cy="29.6588" rx="2.41698" ry="7.44737" transform="rotate(73.8516 70.824 29.6588)" fill="#88D949"/>
      <ellipse cx="43.5003" cy="27.5519" rx="2.41698" ry="7.44737" transform="rotate(127.97 43.5003 27.5519)" fill="#88D949"/>
    </Svg>
  );
};

export default Icon;
