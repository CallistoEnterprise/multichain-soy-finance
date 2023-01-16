import React from 'react'
import uniqueId from 'lodash/uniqueId'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  const id = uniqueId('svg')

  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <g opacity="0.8">
        <circle r="5.55609" transform="matrix(-0.878437 0.477858 0.477858 0.878437 25.9098 31.4874)" fill="#72AAFF" />
        <ellipse
          rx="6.1117"
          ry="5.55609"
          transform="matrix(-0.878437 0.477858 0.477858 0.878437 30.1152 38.0546)"
          fill="#72AAFF"
        />
        <ellipse
          rx="4.65178"
          ry="6.6454"
          transform="matrix(-0.728882 0.684639 0.684639 0.728882 32.6256 42.8176)"
          fill="#72AAFF"
        />
      </g>
      <circle r="7.31251" transform="matrix(-0.965926 0.258819 0.258819 0.965926 17.5604 35.5995)" fill="#72AAFF" />
      <ellipse
        rx="8.04376"
        ry="7.31251"
        transform="matrix(-0.965926 0.258819 0.258819 0.965926 20.9588 44.7902)"
        fill="#72AAFF"
      />
      <ellipse
        rx="6.12232"
        ry="8.74618"
        transform="matrix(-0.868963 0.494877 0.494877 0.868963 22.6607 52.168)"
        fill="#72AAFF"
      />
      <ellipse
        opacity="0.67"
        rx="2.19375"
        ry="5.85001"
        transform="matrix(-0.830122 0.557582 0.557582 0.830122 13.0308 20.5672)"
        fill="#72AAFF"
      />
      <ellipse
        opacity="0.67"
        rx="1.44706"
        ry="4.45879"
        transform="matrix(-0.0200417 0.999799 0.999799 0.0200417 6.89221 28.6431)"
        fill="#72AAFF"
      />
      <ellipse
        opacity="0.67"
        rx="1.44706"
        ry="4.45879"
        transform="matrix(0.798323 0.602229 0.602229 -0.798323 22.3672 23.1913)"
        fill="#72AAFF"
      />
      <g opacity="0.8">
        <circle cx="67.2015" cy="34.8262" r="6.65885" transform="rotate(21.8185 67.2015 34.8262)" fill="#B394FC" />
        <ellipse
          cx="63.1182"
          cy="43.2333"
          rx="7.32474"
          ry="6.65885"
          transform="rotate(21.8185 63.1182 43.2333)"
          fill="#B394FC"
        />
        <ellipse
          cx="60.7988"
          cy="49.2546"
          rx="5.57506"
          ry="7.96437"
          transform="rotate(36.4802 60.7988 49.2546)"
          fill="#B394FC"
        />
      </g>
      <circle cx="77.7165" cy="38.5485" r="8.76388" transform="rotate(8.27292 77.7165 38.5485)" fill="#B394FC" />
      <ellipse
        cx="74.9619"
        cy="49.9651"
        rx="9.64027"
        ry="8.76388"
        transform="rotate(8.27292 74.9619 49.9651)"
        fill="#B394FC"
      />
      <ellipse
        cx="73.972"
        cy="58.9849"
        rx="7.33747"
        ry="10.4821"
        transform="rotate(22.9345 73.972 58.9849)"
        fill="#B394FC"
      />
      <ellipse
        opacity="0.67"
        cx="80.9972"
        cy="20.0212"
        rx="2.62916"
        ry="7.0111"
        transform="rotate(27.1616 80.9972 20.0212)"
        fill="#B394FC"
      />
      <ellipse
        opacity="0.67"
        cx="89.4374"
        cy="28.7714"
        rx="1.73427"
        ry="5.34377"
        transform="rotate(82.1245 89.4374 28.7714)"
        fill="#B394FC"
      />
      <ellipse
        opacity="0.67"
        cx="70.2531"
        cy="24.455"
        rx="1.73427"
        ry="5.34377"
        transform="rotate(136.243 70.2531 24.455)"
        fill="#B394FC"
      />
      <g opacity="0.8">
        <circle cx="39.6753" cy="54.6293" r="7.03228" transform="rotate(13.5456 39.6753 54.6293)" fill="#FFD467" />
        <ellipse
          cx="36.6853"
          cy="64.0357"
          rx="7.73551"
          ry="7.03228"
          transform="rotate(13.5456 36.6853 64.0357)"
          fill="#FFD467"
        />
        <ellipse
          cx="35.1764"
          cy="70.6819"
          rx="5.8877"
          ry="8.41101"
          transform="rotate(28.2072 35.1764 70.6819)"
          fill="#FFD467"
        />
      </g>
      <circle cx="51.2302" cy="56.9209" r="9.25536" fill="#FFD467" />
      <ellipse cx="50.0862" cy="69.2705" rx="10.1809" ry="9.25536" fill="#FFD467" />
      <ellipse
        cx="50.4224"
        cy="78.8471"
        rx="7.74895"
        ry="11.0699"
        transform="rotate(14.6616 50.4224 78.8471)"
        fill="#FFD467"
      />
      <ellipse
        opacity="0.67"
        cx="51.8436"
        cy="37.0597"
        rx="2.77661"
        ry="7.40428"
        transform="rotate(18.8887 51.8436 37.0597)"
        fill="#FFD467"
      />
      <ellipse
        opacity="0.67"
        cx="61.9938"
        cy="44.9221"
        rx="1.83153"
        ry="5.64344"
        transform="rotate(73.8516 61.9938 44.9221)"
        fill="#FFD467"
      />
      <ellipse
        opacity="0.67"
        cx="41.2885"
        cy="43.3262"
        rx="1.83153"
        ry="5.64344"
        transform="rotate(127.97 41.2885 43.3262)"
        fill="#FFD467"
      />
    </Svg>
  )
}

export default Icon
