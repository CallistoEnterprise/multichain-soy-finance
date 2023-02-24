import React from 'react'
import { Svg, SvgProps } from 'uikit2'

export const MatchExampleA: React.FC<{ isDark: boolean } & SvgProps> = ({ isDark, ...rest }) => {
  return (
    <Svg viewBox="0 0 129 46" {...rest}>
      <svg width="258" height="46" viewBox="0 0 258 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect // Obvodový i výplňový obdélník šířky 1
          x="1.64043"
          y="14.5646"
          width="42.912"
          height="29.5807"
          rx="14.7904"
          stroke="#E7E3EB"
          strokeWidth="1.29014"
          fill="url(#paint0_linear)"
        />
        <path // číslo 9 (správné) na prvním místě
          d="M21.7327 37.4606C21.1098 37.4606 20.5647 37.4193 20.0975 37.3367C19.6422 37.2679 19.205 37.1441 18.7857 36.9652V34.261C19.5644 34.6188 20.4689 34.7977 21.4991 34.7977C22.4336 34.7977 23.1344 34.5776 23.6016 34.1372C24.0688 33.6968 24.3024 33.1395 24.3024 32.4652V31.9491C23.955 32.2106 23.5357 32.417 23.0445 32.5684C22.5654 32.7198 22.1161 32.7954 21.6968 32.7954C20.2951 32.7954 19.2709 32.4101 18.6239 31.6395C17.977 30.8688 17.6536 29.7748 17.6536 28.3574C17.6536 27.4629 17.8093 26.6716 18.1208 25.9835C18.4442 25.2817 18.9474 24.7381 19.6303 24.3528C20.3251 23.9537 21.2176 23.7542 22.3078 23.7542C23.9131 23.7542 25.0991 24.1945 25.8658 25.0753C26.6326 25.956 27.0159 27.284 27.0159 29.0592V31.7633C27.0159 32.8642 26.8003 33.8482 26.369 34.7152C25.9497 35.5684 25.3447 36.2427 24.554 36.7381C23.7753 37.2198 22.8349 37.4606 21.7327 37.4606ZM22.2539 30.339C22.6013 30.339 22.9547 30.2702 23.3141 30.1326C23.6735 29.9812 24.0029 29.7954 24.3024 29.5753V28.4812C24.3024 26.9399 23.6316 26.1693 22.2898 26.1693C21.607 26.1693 21.0918 26.3551 20.7444 26.7266C20.409 27.0844 20.2412 27.5867 20.2412 28.2335C20.2412 28.9078 20.385 29.4308 20.6725 29.8023C20.972 30.1601 21.4991 30.339 22.2539 30.339Z"
          fill={isDark ? '#F4EEFF' : '#280D5F'}
        />
        <path // číslo 6 (chybné) na druhém místě
          d="M193.056 37.4606C191.606 37.4606 190.51 37.0477 189.768 36.222C189.037 35.3964 188.671 34.0959 188.671 32.3207V29.3275C188.671 28.2266 188.869 27.2564 189.264 26.417C189.66 25.5775 190.223 24.9239 190.954 24.456C191.684 23.9881 192.553 23.7542 193.559 23.7542C194.146 23.7542 194.655 23.7954 195.087 23.878C195.53 23.9606 195.937 24.0775 196.309 24.2289V26.1486C195.937 25.9973 195.536 25.8803 195.105 25.7977C194.685 25.7152 194.212 25.6739 193.685 25.6739C192.607 25.6739 191.81 25.9697 191.295 26.5615C190.78 27.1395 190.522 27.917 190.522 28.8941V29.7198C190.942 29.362 191.421 29.1005 191.96 28.9353C192.511 28.7564 193.008 28.667 193.451 28.667C194.805 28.667 195.805 29.0454 196.452 29.8023C197.099 30.5592 197.423 31.6326 197.423 33.0225C197.423 34.3436 197.069 35.417 196.363 36.2427C195.656 37.0546 194.554 37.4606 193.056 37.4606ZM193.074 35.7679C193.937 35.7679 194.583 35.5271 195.015 35.0454C195.446 34.5638 195.662 33.917 195.662 33.1051C195.662 32.2519 195.482 31.5913 195.123 31.1234C194.775 30.6418 194.122 30.4009 193.164 30.4009C192.685 30.4009 192.211 30.4973 191.744 30.6899C191.289 30.8688 190.882 31.1097 190.522 31.4124V32.8367C190.522 34.7909 191.373 35.7679 193.074 35.7679Z"
          fill={isDark ? '#868191' : '#BDC2C4'}
          transform="translate(-126,0)"
        />
        <path // číslo 3 (tranzitivně chybné) na třetím místě
          d="M107.094 36.0399C106.747 36.0399 106.363 36.0124 105.944 35.9574C105.525 35.9161 105.123 35.8473 104.74 35.7509C104.369 35.6546 104.057 35.5514 103.806 35.4413V33.4803C104.285 33.7005 104.776 33.8656 105.279 33.9757C105.794 34.072 106.309 34.1202 106.825 34.1202C107.759 34.1202 108.454 33.9619 108.909 33.6454C109.364 33.3289 109.592 32.7716 109.592 31.9734C109.592 31.2578 109.382 30.7418 108.963 30.4252C108.556 30.1087 107.969 29.9505 107.202 29.9505H105.459L105.621 28.2785H107.076C108.598 28.2785 109.358 27.5904 109.358 26.2142C109.358 25.5399 109.155 25.0445 108.747 24.728C108.352 24.4115 107.711 24.2532 106.825 24.2532C106.333 24.2532 105.836 24.3083 105.333 24.4184C104.842 24.5285 104.405 24.6798 104.021 24.8725V22.9528C104.381 22.7876 104.848 22.6431 105.423 22.5193C105.998 22.3954 106.567 22.3335 107.13 22.3335C108.544 22.3335 109.592 22.6775 110.275 23.3656C110.97 24.0537 111.317 24.9344 111.317 26.0078C111.317 26.6684 111.173 27.2876 110.886 27.8656C110.61 28.4436 110.173 28.8564 109.574 29.1041C110.269 29.3106 110.772 29.6821 111.083 30.2188C111.407 30.7555 111.569 31.3885 111.569 32.1179C111.569 33.4528 111.161 34.4436 110.347 35.0904C109.532 35.7234 108.448 36.0399 107.094 36.0399Z"
          fill={isDark ? '#868191' : '#BDC2C4'}
        />
        <path // Fajfka na prvním místě
          d="M23.1066 1.91516C20.4533 1.91516 18.2998 4.05585 18.2998 6.69348C18.2998 9.33112 20.4533 11.4718 23.1066 11.4718C25.76 11.4718 27.9134 9.33112 27.9134 6.69348C27.9134 4.05585 25.76 1.91516 23.1066 1.91516ZM23.1066 10.5161C20.9868 10.5161 19.2612 8.80073 19.2612 6.69348C19.2612 4.58624 20.9868 2.87083 23.1066 2.87083C25.2264 2.87083 26.952 4.58624 26.952 6.69348C26.952 8.80073 25.2264 10.5161 23.1066 10.5161ZM24.9716 4.92073L22.1452 7.73038L21.2416 6.83206C21.0541 6.6457 20.7513 6.6457 20.5638 6.83206C20.3763 7.01841 20.3763 7.31945 20.5638 7.5058L21.8088 8.74339C21.9962 8.92974 22.2991 8.92974 22.4865 8.74339L25.6542 5.59447C25.8417 5.40812 25.8417 5.10708 25.6542 4.92073C25.4667 4.73437 25.1591 4.73437 24.9716 4.92073Z"
          fill="#31D0AA"
        />
        <path // Křížek na druhém místě
          d="M153.515 3.68788C153.328 3.50152 153.025 3.50152 152.838 3.68788L150.487 6.0197L148.136 3.6831C147.949 3.49675 147.646 3.49675 147.459 3.6831C147.271 3.86946 147.271 4.17049 147.459 4.35684L149.809 6.69344L147.459 9.03005C147.271 9.2164 147.271 9.51743 147.459 9.70379C147.646 9.89014 147.949 9.89014 148.136 9.70379L150.487 7.36719L152.838 9.70379C153.025 9.89014 153.328 9.89014 153.515 9.70379C153.703 9.51743 153.703 9.2164 153.515 9.03005L151.165 6.69344L153.515 4.35684C153.698 4.17527 153.698 3.86946 153.515 3.68788Z"
          fill="#ED4B9E"
          transform="translate(-84,0)"
        />
        <path // Fajfka na třetím místě
          d="M66.8485 1.91516C64.1952 1.91516 62.0417 4.05585 62.0417 6.69348C62.0417 9.33112 64.1952 11.4718 66.8485 11.4718C69.5019 11.4718 71.6553 9.33112 71.6553 6.69348C71.6553 4.05585 69.5019 1.91516 66.8485 1.91516ZM66.8485 10.5161C64.7287 10.5161 63.0031 8.80073 63.0031 6.69348C63.0031 4.58624 64.7287 2.87083 66.8485 2.87083C68.9683 2.87083 70.694 4.58624 70.694 6.69348C70.694 8.80073 68.9683 10.5161 66.8485 10.5161ZM68.7136 4.92073L65.8872 7.73038L64.9835 6.83206C64.796 6.6457 64.4932 6.6457 64.3058 6.83206C64.1183 7.01841 64.1183 7.31945 64.3058 7.5058L65.5507 8.74339C65.7382 8.92974 66.041 8.92974 66.2285 8.74339L69.3962 5.59447C69.5836 5.40812 69.5836 5.10708 69.3962 4.92073C69.2087 4.73437 68.9011 4.73437 68.7136 4.92073Z"
          fill="#31D0AA"
          transform="translate(42,0)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="256.984"
            y1="41.1807"
            x2="1.2617"
            y2="41.18"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ED4B9E" />
            <stop offset="0.190071" stopColor="#7B61FF" />
            <stop offset="0.434873" stopColor="#1FC7D4" />
            <stop offset="0.638006" stopColor="#31D0AA" />
            <stop offset="0.841139" stopColor="#FFD800" />
            <stop offset="1" stopColor="#FEAF2E" />
          </linearGradient>
        </defs>
      </svg>
    </Svg>
  )
}
export const MatchExampleB: React.FC<{ isDark: boolean } & SvgProps> = ({ isDark, ...rest }) => {
  return (
    <Svg viewBox="0 0 129 45" {...rest}>
      <svg width="258" height="45" viewBox="0 0 258 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect // Obvodový obdélník šířky 3
          x="1.64043"
          y="14.5646"
          width="127.4"
          height="29.5807"
          rx="14.7904"
          stroke="#868191"
          strokeWidth="1.29014"
        />
        <rect // Výplňový obdélník šířky 3
          x="1.64043"
          y="14.5646"
          width="127.4"
          height="29.5807"
          rx="14.7904"
          fill={isDark ? 'none' : '#FAF9FA'}
        />
        <path // Číslo 0 (chybné) na prvním místě
          d="M22.3406 36.2051C21.1187 36.2051 20.1363 35.9367 19.3936 35.4C18.6508 34.8496 18.1057 34.0652 17.7583 33.0468C17.4228 32.0147 17.2551 30.783 17.2551 29.3518C17.2551 27.8656 17.4169 26.5996 17.7403 25.5537C18.0758 24.5078 18.6149 23.7096 19.3576 23.1592C20.1004 22.6087 21.0947 22.3335 22.3406 22.3335C23.5865 22.3335 24.5749 22.6087 25.3057 23.1592C26.0484 23.7096 26.5815 24.5078 26.905 25.5537C27.2404 26.5996 27.4082 27.8656 27.4082 29.3518C27.4082 30.783 27.2404 32.0147 26.905 33.0468C26.5696 34.0652 26.0305 34.8496 25.2877 35.4C24.5449 35.9367 23.5626 36.2051 22.3406 36.2051ZM22.3406 34.2853C23.4907 34.2853 24.2934 33.8518 24.7486 32.9849C25.2038 32.1041 25.4315 30.8931 25.4315 29.3518C25.4315 27.7142 25.2098 26.4551 24.7666 25.5743C24.3233 24.6936 23.5147 24.2532 22.3406 24.2532C21.1666 24.2532 20.3519 24.6936 19.8967 25.5743C19.4535 26.4551 19.2318 27.7142 19.2318 29.3518C19.2318 30.8931 19.4594 32.1041 19.9147 32.9849C20.3699 33.8518 21.1786 34.2853 22.3406 34.2853Z"
          fill={isDark ? '#868191' : '#BDC2C4'}
        />
        <path // Číslo 1 (tranzitivně chybné) na druhém místě
          d="M64.7859 35.8335V24.5216L62.917 24.8931V23.0147L66.7266 22.3335V35.8335H64.7859Z"
          fill={isDark ? '#868191' : '#BDC2C4'}
        />
        <path // Číslo 3 (tranzitivně chybné) na třetím místě
          d="M107.094 36.0399C106.747 36.0399 106.363 36.0124 105.944 35.9574C105.525 35.9161 105.123 35.8473 104.74 35.7509C104.369 35.6546 104.057 35.5514 103.806 35.4413V33.4803C104.285 33.7005 104.776 33.8656 105.279 33.9757C105.794 34.072 106.309 34.1202 106.825 34.1202C107.759 34.1202 108.454 33.9619 108.909 33.6454C109.364 33.3289 109.592 32.7716 109.592 31.9734C109.592 31.2578 109.382 30.7418 108.963 30.4252C108.556 30.1087 107.969 29.9505 107.202 29.9505H105.459L105.621 28.2785H107.076C108.598 28.2785 109.358 27.5904 109.358 26.2142C109.358 25.5399 109.155 25.0445 108.747 24.728C108.352 24.4115 107.711 24.2532 106.825 24.2532C106.333 24.2532 105.836 24.3083 105.333 24.4184C104.842 24.5285 104.405 24.6798 104.021 24.8725V22.9528C104.381 22.7876 104.848 22.6431 105.423 22.5193C105.998 22.3954 106.567 22.3335 107.13 22.3335C108.544 22.3335 109.592 22.6775 110.275 23.3656C110.97 24.0537 111.317 24.9344 111.317 26.0078C111.317 26.6684 111.173 27.2876 110.886 27.8656C110.61 28.4436 110.173 28.8564 109.574 29.1041C110.269 29.3106 110.772 29.6821 111.083 30.2188C111.407 30.7555 111.569 31.3885 111.569 32.1179C111.569 33.4528 111.161 34.4436 110.347 35.0904C109.532 35.7234 108.448 36.0399 107.094 36.0399Z"
          fill={isDark ? '#868191' : '#BDC2C4'}
        />
        <path // Křížek na prvním místě
          d="M27.3368 3.1067C27.1494 2.92035 26.8465 2.92035 26.6591 3.1067L24.3085 5.43852L21.958 3.10192C21.7705 2.91557 21.4677 2.91557 21.2802 3.10192C21.0928 3.28828 21.0928 3.58931 21.2802 3.77567L23.6308 6.11227L21.2802 8.44887C21.0928 8.63522 21.0928 8.93626 21.2802 9.12261C21.4677 9.30897 21.7705 9.30897 21.958 9.12261L24.3085 6.78601L26.6591 9.12261C26.8465 9.30897 27.1494 9.30897 27.3368 9.12261C27.5243 8.93626 27.5243 8.63522 27.3368 8.44887L24.9863 6.11227L27.3368 3.77567C27.5195 3.59409 27.5195 3.28828 27.3368 3.1067Z"
          fill="#ED4B9E"
        />
        <path // Fajfka na druhém místě
          d="M69.0119 1.33398C66.3585 1.33398 64.2051 3.47467 64.2051 6.11231C64.2051 8.74994 66.3585 10.8906 69.0119 10.8906C71.6652 10.8906 73.8187 8.74994 73.8187 6.11231C73.8187 3.47467 71.6652 1.33398 69.0119 1.33398ZM69.0119 9.93497C66.8921 9.93497 65.1664 8.21955 65.1664 6.11231C65.1664 4.00507 66.8921 2.28965 69.0119 2.28965C71.1317 2.28965 72.8573 4.00507 72.8573 6.11231C72.8573 8.21955 71.1317 9.93497 69.0119 9.93497ZM70.8769 4.33955L68.0505 7.1492L67.1468 6.25088C66.9594 6.06452 66.6565 6.06452 66.4691 6.25088C66.2816 6.43723 66.2816 6.73827 66.4691 6.92462L67.714 8.16221C67.9015 8.34856 68.2043 8.34856 68.3918 8.16221L71.5595 5.01329C71.7469 4.82694 71.7469 4.5259 71.5595 4.33955C71.372 4.1532 71.0644 4.1532 70.8769 4.33955Z"
          fill="#31D0AA"
          transform="translate(-3,0)"
        />
        <path // Fajfka na třetím místě
          d="M109.389 1.33398C106.735 1.33398 104.582 3.47467 104.582 6.11231C104.582 8.74994 106.735 10.8906 109.389 10.8906C112.042 10.8906 114.196 8.74994 114.196 6.11231C114.196 3.47467 112.042 1.33398 109.389 1.33398ZM109.389 9.93497C107.269 9.93497 105.543 8.21955 105.543 6.11231C105.543 4.00507 107.269 2.28965 109.389 2.28965C111.509 2.28965 113.234 4.00507 113.234 6.11231C113.234 8.21955 111.509 9.93497 109.389 9.93497ZM111.254 4.33955L108.427 7.1492L107.524 6.25088C107.336 6.06452 107.034 6.06452 106.846 6.25088C106.659 6.43723 106.659 6.73827 106.846 6.92462L108.091 8.16221C108.278 8.34856 108.581 8.34856 108.769 8.16221L111.936 5.01329C112.124 4.82694 112.124 4.5259 111.936 4.33955C111.749 4.1532 111.441 4.1532 111.254 4.33955Z"
          fill="#31D0AA"
          transform="translate(-3,0)"
        />
      </svg>
    </Svg>
  )
}
