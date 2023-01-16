import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66.8092 25.0009C63.494 25.0009 60.3146 26.3178 57.9704 28.6621C55.6262 31.0063 54.3092 34.1857 54.3092 37.5009C54.3092 40.8161 55.6262 43.9955 57.9704 46.3397C60.3146 48.6839 63.494 50.0009 66.8092 50.0009C70.1244 50.0009 73.3039 48.6839 75.6481 46.3397C77.9923 43.9955 79.3092 40.8161 79.3092 37.5009C79.3092 34.1857 77.9923 31.0063 75.6481 28.6621C73.3039 26.3178 70.1244 25.0009 66.8092 25.0009ZM45.9759 37.5009C45.9759 34.1049 46.8061 30.7604 48.3943 27.7586C49.9824 24.7568 52.2802 22.1887 55.0877 20.278C57.8952 18.3673 61.1273 17.1719 64.5024 16.7958C67.8775 16.4198 71.2934 16.8746 74.4526 18.1205C77.6118 19.3664 80.4185 21.3658 82.6284 23.9444C84.8382 26.5231 86.3842 29.6029 87.1317 32.9156C87.8791 36.2283 87.8054 39.6736 86.917 42.9513C86.0286 46.2291 84.3523 49.2399 82.0342 51.7217C89.1028 54.0212 95.2139 58.5913 99.4176 64.7217C100.004 65.6349 100.211 66.7409 99.9943 67.8043C99.7778 68.8677 99.1549 69.8047 98.2581 70.4159C97.3614 71.0271 96.2615 71.2644 95.1926 71.0771C94.1236 70.8899 93.1699 70.293 92.5342 69.4134C88.4676 63.4467 81.0509 58.3342 70.9759 58.3342C55.0009 58.3342 45.9759 71.1426 45.9759 79.1676C45.9759 80.2726 45.5369 81.3324 44.7555 82.1138C43.9741 82.8952 42.9143 83.3342 41.8092 83.3342C40.7042 83.3342 39.6444 82.8952 38.863 82.1138C38.0816 81.3324 37.6426 80.2726 37.6426 79.1676C37.6426 76.2842 38.3009 73.2092 39.5592 70.1801C39.2321 69.9681 38.9361 69.7115 38.6801 69.4176C35.2592 65.5259 29.9509 62.5009 23.0592 62.5009C16.1676 62.5009 10.8592 65.5259 7.4384 69.4176C6.69769 70.2043 5.68027 70.6726 4.60087 70.7235C3.52146 70.7744 2.4645 70.404 1.65304 69.6903C0.841578 68.9767 0.339093 67.9758 0.251626 66.8987C0.16416 65.8217 0.498553 64.7527 1.18424 63.9176C3.64472 61.1173 6.62833 58.8244 9.96757 57.1676C7.29968 54.5639 5.46848 51.224 4.70785 47.5746C3.94723 43.9252 4.29171 40.1318 5.6973 36.6791C7.10289 33.2264 9.50578 30.2711 12.5991 28.1906C15.6923 26.1101 19.3356 24.9988 23.0634 24.9988C26.7912 24.9988 30.4345 26.1101 33.5278 28.1906C36.621 30.2711 39.0239 33.2264 40.4295 36.6791C41.8351 40.1318 42.1796 43.9252 41.419 47.5746C40.6583 51.224 38.8271 54.5639 36.1592 57.1676C39.0499 58.6022 41.6772 60.5153 43.9301 62.8259C46.76 59.265 50.2805 56.3128 54.2801 54.1467C51.6989 52.207 49.6048 49.693 48.1634 46.8039C46.7221 43.9147 45.9732 40.7296 45.9759 37.5009V37.5009ZM12.6426 43.7509C12.6426 40.9882 13.74 38.3387 15.6935 36.3852C17.647 34.4317 20.2966 33.3342 23.0592 33.3342C25.8219 33.3342 28.4714 34.4317 30.4249 36.3852C32.3784 38.3387 33.4759 40.9882 33.4759 43.7509C33.4759 46.5136 32.3784 49.1631 30.4249 51.1166C28.4714 53.0701 25.8219 54.1676 23.0592 54.1676C20.2966 54.1676 17.647 53.0701 15.6935 51.1166C13.74 49.1631 12.6426 46.5136 12.6426 43.7509Z"
      />
    </Svg>
  )
}

export default Icon
